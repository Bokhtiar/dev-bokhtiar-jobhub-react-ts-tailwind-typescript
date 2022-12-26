export type jwtTokenType = {
  id: string;
  name: string;
  role: string;
  permissions: string[];
  iat: number;
  exp: number;
};
