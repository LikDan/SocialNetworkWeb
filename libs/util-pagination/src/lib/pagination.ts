import {BehaviorSubject, firstValueFrom, Observable, tap} from "rxjs"
import {HttpClient} from "@angular/common/http"

export class Pagination<T> {
  private nextElements: T[]

  constructor(private http: HttpClient, public url: string) {
  }

  private _elements = new BehaviorSubject<T[]>([])

  get elements(): Observable<T[]> {
    return this._elements
  }

  private _hasNext = new BehaviorSubject<boolean>(false)

  get hasNext(): Observable<boolean> {
    return this._hasNext
  }

  get lastID(): string {
    return this.getID(this._elements.value[this._elements.value.length - 1]) ?? "0"
  }

  append(el: T): void {
    let elements = this._elements.value
    elements.push(el)
    elements = elements.sort((a, b) => this.getID(a) - this.getID(b))
    this._elements.next(elements)
  }

  next(): void {
    this._hasNext.next(false)
    this._elements.next(this._elements.value.concat(this.nextElements))
    this.nextElements = []
    firstValueFrom(this.loadNext()).then(v => {
      this.nextElements = v
      this._hasNext.next(v.length != 0)
    })
  }

  load(): Observable<T[]> {
    return this.loadNext("0").pipe(
      tap(v => this._elements.next(v)),
      tap(_ => firstValueFrom(this.loadNext()).then(v => {
        this.nextElements = v
        this._hasNext.next(v.length != 0)
      }))
    )
  }

  private getID(obj: T) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return obj?.id
  }

  private loadNext(from: string = this.lastID): Observable<T[]> {
    return this.http.get<T[]>(this.buildUrl(from))
  }

  private buildUrl(from: string) {
    const slashIndex = this.url.indexOf("/")
    return slashIndex != -1 && this.url.substring(slashIndex).indexOf("?") != -1
      ? `${this.url}&from=${from}&per_page=10`
      : `${this.url}?from=${from}&per_page=10`
  }
}
