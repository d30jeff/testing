export interface ApplicationConfig {
  name: string;
  port?: number;
  enableCors?: boolean;
  enableHelmet?: boolean;
  enableCookieParser?: boolean;
  enableMorganLogging?: boolean;
  controllers?: any[];
}