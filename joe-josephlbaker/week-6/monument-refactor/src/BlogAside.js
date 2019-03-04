import React, { Component } from 'react';

import BlogIssues from './BlogIssues';

import './css/blog.css';

class BlogAside extends Component {
  render() {
    const issuesList = [
      {
        issue: 'Issue Nineteen - Camping'
      },
      {
        issue: 'Issue Eighteen - Food'
      },
      {
        issue: 'Issue Seventeen - Signs'
      },
      {
        issue:'Issue Sixteen - Friends'
      },
      {
        issue: 'Issue Fifteen - Carnivals'
      },
      {
        issue: 'Issue Fourteen - Gatherings'
      }
    ];

    const renderedIssuesList = issuesList.map(issues => {
      return <BlogIssues issues={issues} />;
    });

    return (
      <aside>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.</p>
        <p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
        <img src="images/about.jpg" alt="" />
        <h3>Recent Issues</h3>
        {renderedIssuesList}
		  </aside>
    );
  }
}

export default BlogAside;
