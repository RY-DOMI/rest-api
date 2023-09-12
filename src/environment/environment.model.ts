export interface Server {
  host: string;
  port: number;
  base_path: string;
}

export interface Database {
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
}

export interface API {
  token_secret: string;
  ip_whitelist: string[];
}

export interface EnvConfig {
  environment: string;
  server: Server;
  database: Database;
  api: API;
}
