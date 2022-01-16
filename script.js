const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');


const testimonials = [
  {
    name: 'Nathan Sterling',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    text: "If you want real marketing that works and effective implementation - Nathan's got you covered. I like product more and more each day because it makes my life a lot easier. This is simply unbelievable!",
  },
  {
    name: 'Sarah Stones',
    position: 'Designer',
    photo: 'https://randomuser.me/api/portraits/women/14.jpg',
    text: "Wow what great service, I love it! If you want real marketing that works and effective implementation - web design's got you covered. Sparkly Design should be nominated for service of the year.",
  },
  {
    name: 'Omar Tesoro',
    position: 'Project Manager',
    photo: 'https://randomuser.me/api/portraits/men/24.jpg',
    text: "It's exactly what I've been looking for. If you want real marketing that works and effective implementation - Omar's got you covered. I wish I would have thought of it first",
  },
];

let index = 0 

function updateTestimonial(){
  const {name, position , photo , text } = testimonials[index]

  testimonial.innerHTML = text 
  userImage.src = photo 
  username.innerHTML = name 
  role.innerHTML = position 

  index ++ 

  if(index > testimonials.length -1 ) {
    index = 0
  }
}

setInterval(updateTestimonial, 10000)


updateTestimonial()
