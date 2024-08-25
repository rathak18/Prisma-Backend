import { BlogService } from '../services/blog.service';

describe('BlogService', () => {
  let blogService: BlogService;

  beforeAll(() => {
    blogService = new BlogService();
  });

  it('should create a new blog', async () => {
    const blog = await blogService.createBlog({
      title: 'Test Blog',
      content: 'This is a test blog',
    });
    expect(blog).toHaveProperty('id');
    expect(blog.title).toBe('Test Blog');
  });

  // Other tests...
});
