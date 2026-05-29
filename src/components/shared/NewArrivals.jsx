import React from 'react';
import Marquee from 'react-fast-marquee';
const newArrivals = [
  {
    "id": 1,
    "title": "The Lost Kingdom",
    "author": "Emma Carter",
    "description": "An adventurous story about a hidden kingdom and a brave young explorer.",
    "category": "Story",
    "available_quantity": 7,
    "image_url": "https://picsum.photos/200/300?random=1"
  },
  {
    "id": 2,
    "title": "Mastering JavaScript",
    "author": "David Miller",
    "description": "A practical guide to modern JavaScript programming and web development.",
    "category": "Tech",
    "available_quantity": 10,
    "image_url": "https://picsum.photos/200/300?random=2"
  },
  {
    "id": 3,
    "title": "The Mystery Lake",
    "author": "Sophia Wilson",
    "description": "A thrilling mystery story centered around a strange lake in a small town.",
    "category": "Story",
    "available_quantity": 5,
    "image_url": "https://picsum.photos/200/300?random=3"
  },
  {
    "id": 4,
    "title": "Space and Beyond",
    "author": "Michael Brown",
    "description": "An introduction to space science, planets, and the mysteries of the universe.",
    "category": "Science",
    "available_quantity": 8,
    "image_url": "https://picsum.photos/200/300?random=4"
  },
  {
    "id": 5,
    "title": "React for Beginners",
    "author": "Sarah Johnson",
    "description": "Learn the basics of React and build interactive web applications.",
    "category": "Tech",
    "available_quantity": 12,
    "image_url": "https://picsum.photos/200/300?random=5"
  },
  {
    "id": 6,
    "title": "Journey Through Time",
    "author": "Olivia Taylor",
    "description": "A fascinating fictional journey across different historical eras.",
    "category": "Story",
    "available_quantity": 6,
    "image_url": "https://picsum.photos/200/300?random=6"
  },
  {
    "id": 7,
    "title": "Human Body Explained",
    "author": "Daniel Moore",
    "description": "A detailed yet simple explanation of how the human body works.",
    "category": "Science",
    "available_quantity": 9,
    "image_url": "https://picsum.photos/200/300?random=7"
  },
  {
    "id": 8,
    "title": "Cybersecurity Essentials",
    "author": "James Anderson",
    "description": "Understand the fundamentals of online security and data protection.",
    "category": "Tech",
    "available_quantity": 4,
    "image_url": "https://picsum.photos/200/300?random=8"
  },
  {
    "id": 9,
    "title": "The Silent Forest",
    "author": "Ava Martinez",
    "description": "A suspenseful story about secrets hidden deep inside an ancient forest.",
    "category": "Story",
    "available_quantity": 11,
    "image_url": "https://picsum.photos/200/300?random=9"
  },
  {
    "id": 10,
    "title": "Climate Change Today",
    "author": "Emily White",
    "description": "An insightful overview of climate change and its global impacts.",
    "category": "Science",
    "available_quantity": 7,
    "image_url": "https://picsum.photos/200/300?random=10"
  },
  {
    "id": 11,
    "title": "Python Programming Basics",
    "author": "William Harris",
    "description": "A beginner-friendly introduction to Python programming concepts.",
    "category": "Tech",
    "available_quantity": 13,
    "image_url": "https://picsum.photos/200/300?random=11"
  },
  {
    "id": 12,
    "title": "Stars of the Ocean",
    "author": "Charlotte King",
    "description": "A beautiful story of friendship and survival on a long sea voyage.",
    "category": "Story",
    "available_quantity": 5,
    "image_url": "https://picsum.photos/200/300?random=12"
  }
]
const NewArrivals = () => {
    return (
        <div className='flex items-center gap-4 py-4 justify-between px-2 bg-gray-300 container mx-auto rounded-lg mt-6'>
            <button className="btn btn-secondary ">New Arrivals</button>
            <Marquee>
             {newArrivals.map(book => {
              return(
                <div > 
              <span key={book._id} className="mx-6 flex items-center gap-2">{book.title} | Special Discount on Memberships...</span> </div>
             

              )
             })}
            </Marquee>
        </div>
    );
};

export default NewArrivals;