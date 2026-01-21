export interface User {
  id: number;
  email: string;
  name: string | null;
  provider: string;
  created_at: string;
  phone_number?: string;
  firebase_uid?: string;
}

export interface OTPAuthRequest {
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}