import axios from 'axios';

const API_URL = 'http://localhost:9090/api';

// Helper function to encode password in base64
const encodePassword = (password: string): string => {
  return btoa(password);
};

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  username: string;
}

export interface UserDetails {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: async (data: RegisterRequest): Promise<UserDetails> => {
    const response = await api.post('/auth/register', {
      ...data,
      password: encodePassword(data.password),
    });
    return response.data;
  },

  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', {
      ...data,
      password: encodePassword(data.password),
    });
    return response.data;
  },

  getUserDetails: async (): Promise<UserDetails> => {
    const response = await api.get('/user/details');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
}; 