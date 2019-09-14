# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Instructors
User.create!(first_name: 'Jeffrey', last_name: 'Bui', email: 'jeffreykbui@gmail.com', password: '123456')

# Students
User.create!(first_name: 'Lana', last_name: 'Dann', email: 'lanadann@gmail.com', password: '123456')
User.create!(first_name: 'Francis', last_name: 'Anand', email: 'fanand@gmail.com', password: '123456')
User.create!(first_name: 'Meeko', last_name: 'Rayo', email: 'meeko@gmail.com', password: '123456')

# Courses
Course.create!(
    title: 'Intro to Heroism', 
    description: 'Discover the philosphy behind being a true Hero', 
    instructor: 'Jeffrey Bui', 
    price: 2.99, 
    duration: 60, 
    what_youll_learn: ['Heroism 101','What IS a Hero?', 'Choosing your Hero identity', 'When and when not to wear a costume', 'Not all Heroes wear capes', 'Local Heroes - Helping the community', 'Overcoming Villains', 'Dying the Hero, or living long enough to see yourself become the Villain?'], 
    requirements: ['5 years of experience in JAVA, c++, Python, or any related language', 'A good sense of justice', 'Muscles', 'Athletic ability','Righteousness'],
    course_description: "This is an extensive well-rounded course on what it takes to be a Hero. The course doesn't only touch the physical nature of the Hero job, but dives into the philosphy of what being a hero truly is. Is it a person with power? Is it a person with a sense of justice? Yes, and yes - but this power doesn't come from just strength and muscles. TRUE power comes from within... Take the course to learn more!!!! MARVEL!!!!!!",
    num_lectures: 2,
    num_videos: 2,
    num_students: 1956,
    num_reviews: 254,
    who_this_course_is_for: ['This course is for people interested in hero work', 'You should take this course if you want to learn more about Marvel heroes', 'This course is for people with a strong heart']
)