# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Users
User.create!(first_name: 'Jeffrey', last_name: 'Bui', email: 'jeffreykbui@gmail.com', password: '123456')
User.create!(first_name: 'Lana', last_name: 'Dann', email: 'lanadann@gmail.com', password: '123456')
User.create!(first_name: 'Francis', last_name: 'Anand', email: 'fanand@gmail.com', password: '123456')
User.create!(first_name: 'Meeko', last_name: 'Rayo', email: 'meeko@gmail.com', password: '123456')

# Courses
Course.create!(
    title: "Odin Makes: Thor's Hammer", 
    description: "I make Thor’s hammer Mjolnir, from Marvel’s movie Thor: Ragnarok! (well, Thor: Dark World really)", 
    instructor: "Odin Makes",
    price: 19.99, 
    duration: 12, 
    what_youll_learn: ["How to use yoga blocks in crafting", "Using cement", "5 minute Epoxy", "How to spray paint", "How to use leather", "Styling with Acrylic paints"], 
    requirements: ["Must be 18 years or older OR accompanied by an adult", "Gather all of the materials", "A passion for crafts and Marvel"],
    course_description: "Odin Abbott is a host with DIY Prop Shop, and Odin Makes continues the desire to show how to make items for yourself.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 1745,
    num_reviews: 25,
    who_this_course_is_for: ["This course is for people who have a passion for arts and crafts", "Opened to adults and children of all ages!", "Anybody who loves Marvel and/or Thor"],
    youtube_code: "https://www.youtube.com/embed/JRjI-dvK_eo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com&modestbranding=1"
)