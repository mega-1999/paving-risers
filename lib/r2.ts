export const R2_URL = 'https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev';

export function r2Video(path: string): string {
  const cleanPath = path.replace(/^\/?(api\/r2\/)?(videos\/)?/, '');
  return `${R2_URL}/videos/${cleanPath}`;
}
