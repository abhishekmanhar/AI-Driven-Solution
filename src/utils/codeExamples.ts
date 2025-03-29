
export interface CodeExample {
  id: string;
  language: string;
  title: string;
  description: string;
  originalCode: string;
  enhancedCode: string;
}

export const codeExamples: CodeExample[] = [
  {
    id: "example1",
    language: "javascript",
    title: "Smart Code Completion",
    description: "Transform verbose code into concise, modern JavaScript",
    originalCode: 
`// Original verbose code
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.price && item.quantity) {
      total = total + (item.price * item.quantity);
    }
  }
  return total;
}`,
    enhancedCode: 
`// Enhanced with modern JS features
const calculateTotal = (items) => {
  return items
    .filter(item => item.price && item.quantity)
    .reduce((total, item) => total + item.price * item.quantity, 0);
}`
  },
  {
    id: "example2",
    language: "typescript",
    title: "Type Inference",
    description: "Add TypeScript types to improve code quality",
    originalCode: 
`// JavaScript without types
function sortUsersByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

const filterActiveUsers = (users) => {
  return users.filter(user => user.isActive);
};`,
    enhancedCode: 
`// With TypeScript types
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

function sortUsersByAge(users: User[]): User[] {
  return users.sort((a, b) => a.age - b.age);
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
};`
  },
  {
    id: "example3",
    language: "react",
    title: "React Component Refactoring",
    description: "Modernize React components with hooks",
    originalCode: 
`// Class-based component
import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err.message, loading: false });
      });
  }

  render() {
    const { user, loading, error } = this.state;
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}`,
    enhancedCode: 
`// Modern functional component with hooks
import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/user');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};`
  }
];
