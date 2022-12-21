import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable, ReplaySubject, tap} from "rxjs"
import {Profile} from "../models/profile"

@Injectable({
  providedIn: "root"
})
export class UserService {
  static readonly tokenKey = "token"

  profile: Profile | null = null

  private profile$ = new ReplaySubject<Profile | null>(1)

  constructor(private http: HttpClient) {
    this.loadProfile()
  }

  get token(): string | null {
    return localStorage.getItem(UserService.tokenKey) ?? sessionStorage.getItem(UserService.tokenKey)
  }

  saveToken(remember: boolean, token: string): void {
    if (remember) localStorage.setItem(UserService.tokenKey, token)
    else sessionStorage.setItem(UserService.tokenKey, token)
  }

  logout(): void {
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")

    this.profile$.next(null)
  }

  getProfile = (): Observable<Profile | null> => this.profile$

  loadProfile(): Observable<Profile | null> {
    if (this.token == null) {
      this.profile$.next(null)
      return this.getProfile()
    }

    this.http.get<Profile | null>("api/profiles/self").subscribe({
      next: profile => {
        this.profile = profile
        this.profile$.next(profile)
      }
    })

    return this.getProfile()
  }

  updateProfile(profile: Profile): Observable<Profile | null> {
    return this.http.put<Profile | null>(`api/profiles/${this.profile?.id ?? -1}`, profile)
      .pipe(tap(p => {
        this.profile = p
        this.profile$.next(p)
      }))
  }

  updatePhoto(file: File): Observable<{url: string}> {
    const formData = new FormData()
    formData.append("avatar", file, file.name)

    return this.http.post<{url: string}>(`api/profiles/addPicture`, formData)
      .pipe(tap(url => {
        const profile = this.profile
        if (profile == null) return

        profile.picture_path = url.url
        this.profile$.next(profile)
      }))
  }
}
