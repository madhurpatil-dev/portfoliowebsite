import { describe, expect, it } from 'vitest';
import { education, experience, projects, skillGroups } from './portfolio.data';

describe('portfolio content', () => {
  it('contains every existing portfolio entry', () => {
    expect(skillGroups).toHaveLength(4);
    expect(experience).toHaveLength(4);
    expect(projects).toHaveLength(6);
    expect(education).toHaveLength(3);
  });

  it('provides a destination and accessible preview text for each project', () => {
    for (const project of projects) {
      expect(project.href).toMatch(/^https:\/\//);
      expect(project.imageAlt.length).toBeGreaterThan(0);
    }
  });

  it('features One Stop Tools first', () => {
    expect(projects[0].title).toBe('One Stop Tools');
    expect(projects[0].index).toBe('01');
  });
});
