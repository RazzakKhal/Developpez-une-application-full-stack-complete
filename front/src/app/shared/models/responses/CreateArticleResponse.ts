export interface CreateArticleResponse {
  id: number,
  title: string,
  content: string,
  comments: null | Comment[],
  createdAt: Date
}
