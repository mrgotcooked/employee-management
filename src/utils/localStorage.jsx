const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Create monthly sales report",
        date: "2026-03-25",
        category: "Sales"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Meeting",
        description: "Meeting with client regarding project",
        date: "2026-03-20",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Invoice",
        description: "Send invoice to client",
        date: "2026-03-18",
        category: "Finance"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website Update",
        description: "Update homepage UI",
        date: "2026-03-25",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix Bugs",
        description: "Resolve login page bugs",
        date: "2026-03-24",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review team code",
        date: "2026-03-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy app to server",
        date: "2026-03-21",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 3,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Logo",
        description: "Create logo for new product",
        date: "2026-03-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Poster Design",
        description: "Design marketing poster",
        date: "2026-03-23",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Banner Design",
        description: "Design website banner",
        date: "2026-03-20",
        category: "Design"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,  
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Backup company database",
        date: "2026-03-25",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Queries",
        description: "Improve database performance",
        date: "2026-03-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Records",
        description: "Update customer records",
        date: "2026-03-22",
        category: "Database"
      }
    ]
  },
  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      newTask: 3,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social Media Post",
        description: "Post new product on Instagram",
        date: "2026-03-25",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email Campaign",
        description: "Send email to customers",
        date: "2026-03-23",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Ad Campaign",
        description: "Run Facebook ads",
        date: "2026-03-21",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Market Research",
        description: "Research competitors",
        date: "2026-03-24",
        category: "Research"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    firstName: "Mr. Admin",
  }
];

export const setlocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}

