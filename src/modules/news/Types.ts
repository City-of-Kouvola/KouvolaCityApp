export interface NewsArticle {
  author: number;
  categories: number[];
  comment_status: string;
  content: Content;
  date: string;
  date_gmt: string;
  excerpt: Excerpt;
  featured_media: number;
  format: string;
  guid: Guid;
  id: number;
  lang: string;
  link: string;
  meta: any[];
  modified: string;
  modified_gmt: string;
  ping_status: string;
  pll_sync_post: any[];
  service: any[];
  slug: string;
  status: string;
  sticky: boolean;
  tags: number[];
  template: string;
  title: Title;
  translations: any;
  type: string;
  yoast_head: string;
  _links: any;
}

interface Content {
  protected: boolean;
  rendered: string;
}

interface Excerpt {
  protected: boolean;
  rendered: string;
}

interface Guid {
  rendered: string;
}
interface Title {
  rendered: string;
}
