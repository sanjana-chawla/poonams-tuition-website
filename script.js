const blogPosts = [
    { title: "How to Improve Your Hindi Skills", date: "January 10, 2025", content: "In this blog, we'll discuss some tips and tricks to improve your Hindi skills..." },
    { title: "Effective Study Tips for 3rd to 8th Graders", date: "February 1, 2025", content: "Studying can be overwhelming, but with the right techniques, students can excel..." },
];

const blogList = document.getElementById("blog-posts");

blogPosts.forEach(post => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h3>${post.title}</h3><p><strong>${post.date}</strong></p><p>${post.content}</p>`;
    blogList.appendChild(listItem);
});
