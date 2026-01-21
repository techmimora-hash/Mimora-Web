import { API_CONFIG } from '../config/api';
import type { User, OTPAuthRequest } from '../types/auth.types';

class AuthService {
  private async fetchWithAuth(endpoint: string, token: string, options: RequestInit = {}) {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Request failed');
    }

    return response.json();
  }

  async authenticateWithOTP(firebaseToken: string, name: string): Promise<User> {
    const payload: OTPAuthRequest = { name };
    
    return this.fetchWithAuth(API_CONFIG.ENDPOINTS.OTP_AUTH, firebaseToken, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async authenticateWithEmail(firebaseToken: string): Promise<User> {
    return this.fetchWithAuth(API_CONFIG.ENDPOINTS.EMAIL_LOGIN, firebaseToken, {
      method: 'POST',
    });
  }
    async authenticateWithOAuth(firebaseToken: string): Promise<User> {
    return this.fetchWithAuth('/auth/customer/oauth', firebaseToken, {
      method: 'POST',
    });
  }
}

export const authService = new AuthService();