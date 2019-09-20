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
User.create!(first_name: 'Tony', last_name: 'Stark', email: 'tony.stark@starkindustries.com', password: 'iloveironman')

#Lecture
Lecture.create!(title: "The Official MCU Timeline Explained")

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
    youtube_code: "https://www.youtube.com/embed/JRjI-dvK_eo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "Odin Makes: Stormbreaker", 
    description: "I make Thor’s new axe Stormbreaker from Avengers: Infinity War. I made this prop before I saw the movie, I only had pictures of the toys to work from!", 
    instructor: "Odin Makes",
    price: 21.99, 
    duration: 13, 
    what_youll_learn: ["How to use yoga blocks in crafting", "Using cement", "5 minute Epoxy", "How to spray paint", "How to use leather", "Styling with Acrylic paints"], 
    requirements: ["Must be 18 years or older OR accompanied by an adult", "Gather all of the materials", "A passion for crafts and Marvel"],
    course_description: "Odin Abbott is a host with DIY Prop Shop, and Odin Makes continues the desire to show how to make items for yourself.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 3588,
    num_reviews: 145,
    who_this_course_is_for: ["This course is for people who have a passion for arts and crafts", "Opened to adults and children of all ages!", "Anybody who loves Marvel and/or Thor"],
    youtube_code: "https://www.youtube.com/embed/TZb2wxlUwVM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "How to make Captain America's Shield", 
    description: "Learn how to make your very own Captain America Shield from the popular Marvel film.", 
    instructor: "AlumniTube",
    price: 21.99, 
    duration: 14, 
    what_youll_learn: ["How to construct and craft using heavy metals","Learn how to weld your own metals","How to use a powersaw","Learn styling mechanics with different painting techniques"], 
    requirements: ["Recommends adult supervision with children under 18 years old","Have access to welding station","Have general knowledge of crafts and construction"],
    course_description: "Hi, AlumniTube here! I'm a Marvel superfan and love the idea of crafting Marvel's famous products. I have many years of experience in building and constructing, so I used that experience to create these fun products. This course will go over the full process of how I built my Captain America Shield from scratch. Please enjoy!",
    num_lectures: 1,
    num_videos: 1,
    num_students: 5445,
    num_reviews: 210,
    who_this_course_is_for: ["Anyone who loves to create fun things", "Marvel fans", "People with experience in crafting with heavy metals"],
    youtube_code: "https://www.youtube.com/embed/vvbRX1WKbiE?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "How to: Stunts From Captain America: The Winter Soldier In Real Life", 
    description: "This course overviews how to pull off the stunts from the hit Marvel film Captain America: The Winter Soldier", 
    instructor: "Nick Pro",
    price: 10.99, 
    duration: 10, 
    what_youll_learn: ["How I prepared myself to perform these stunts", "See clips on my stunts being performed in real life", "Compare stunts with the film's stunts","Do flips and tricks", "Parkour moves"], 
    requirements: ["Stretch before performing these stunts!", "Practice at home before taking it outside", "Practice on a shock-absorbant mat","Practice with buddies!"],
    course_description: "Doing Stunts from Captain America: The Winter Soldier in real life. It was so much fun to do the parkour and flip stunts from the movie! Thank you to team GNT (ginger ninja trickster) for help recreating the stunts with some beautiful kicks and flips! What movie should I do the Parkour, Freerunning, and flips from next? Would you like to see another Nick Pro + team GNT collab?",
    num_lectures: 1,
    num_videos: 1,
    num_students: 912,
    num_reviews: 12,
    who_this_course_is_for: ["Parkour enthusiasts", "Marvel fans", "People who know how to perform parkour", "People who know how to fall safely"],
    youtube_code: "https://www.youtube.com/embed/OwxIyhDX1Ew?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "The Official MCU Timeline Explained", 
    description: "Everything We Know About Marvel’s Phase 4 Timeline and Storyline", 
    instructor: "CBR",
    price: 25.99, 
    duration: 30, 
    what_youll_learn: ["The timeline of the MCU timeline leading up to Avengers: Endgame", "Backstory behind multiple characters", "Marvel theories"], 
    requirements: ["Recommended to have seen some of the Marvel films to have a general understanding of the events taking place"],
    course_description: "This course goes over the 'phase four' timeline of the Marvel Cinematic Universe. Here we will go over character story arcs, timeline of significant events, and who, what, when, where, and why! On a side note, we’re always looking ahead to the next big things happening in the Marvel Cinematic Universe, but until recently, it was pretty challenging! Spider-Man: Far From Home marked the end of the third phase of Marvel movies and we couldn’t be more excited about Phase Four. We’ll share all the news we know about this period of media as well as what to expect beyond it. Of course, we’ll see some of our favorite heroes returning to the big screen, such as Black Widow and Thor. We’ll talk about why Jane Foster is back for Love and Thunder and whether it takes place before or after Guardians of the Galaxy Vol. 3.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 9986,
    num_reviews: 423,
    who_this_course_is_for: ["Marvel Fans", "Anybody interested in learning more about the MCU!"],
    youtube_code: "https://www.youtube.com/embed/hFRDkSR2OEo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "How to Build an Iron Man Helmet & Suit", 
    description: "This course shows the highlights of my four-year Iron Man suit and helmet build, showing some of the fabrication, mechanics, 3D printing and electronics involved.", 
    instructor: "James Bruton",
    price: 9.99, 
    duration: 4, 
    what_youll_learn: ["How to build your own suit using budget materials", "Key steps in building each part", "How to use crafts", "How to work with LED lights", "How to handle circuit boards"], 
    requirements: ["A large area to work on the suit", "Experience with electrical engineering", "Tools to construct suit", "Recommends adult supervision for children under 18", "Free time"],
    course_description: "This video shows the highlights of my four-year Iron Man suit and helmet build, showing some of the fabrication, mechanics, 3D printing and electronics involved. For many, cosplaying Iron Man is a dream project and this will always be one of my favourite characters to cosplay. The arc reactor, unibeam, power suit and helmet all require an attention to detail to make them look good, hopefully that's what I achieved. Let me know what you think in the comments.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 15,
    num_reviews: 2,
    who_this_course_is_for: ["People with experience in electronics", "Crafty people", "Those who have the time to commit to building the suit", "Experience with using powertools", "Iron Man/Marvel fans"],
    youtube_code: "https://www.youtube.com/embed/8dy9tAhweeU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "How Iron Man Could Return", 
    description: "This is a theoretical course on the possible return of Iron Man", 
    instructor: "Looper",
    price: 5.99, 
    duration: 10, 
    what_youll_learn: ["The history of Iron Man and Tony Stark", "How Marvel can conduct his return", "Why should he return?", "When would he return?", "How to analyze specific events in the films and reality to form our hypothesis", "Percentage that this would happen?"], 
    requirements: ["General knowledge of Iron Man and the MCU", "Have watched the Iron Man films", "Have watched Avengers: Endgame"],
    course_description: "Chances are pretty good that you've already seen Avengers: Endgame and don't need this spoiler warning — but, as you no doubt know, Tony Stark doesn't make it out of Endgame alive. Since so much of the Marvel Cinematic Universe has been built around Stark and his armor-clad alter ego, his absence leaves a pretty big vacuum. But will it stay that way forever? Maybe...maybe not. Here's how Iron Man just might return to the MCU, in one form or another. One of the best things about having a hero whose powers come from a suit of armor is that almost anyone can wear it, assuming they're the kind of person who doesn't mind flying around with rocket-boots and shooting bad guys with repulsor rays. If that's the case, then there's no better candidate for the new Iron Man than Colonel Jim Rhodes, who already has plenty of experience in the suit. That's not what makes Rhodey the obvious choice, though. In comics, he's been better known as War Machine for decades, but Rhodey's first major story came when he took over the identity of Iron Man while Tony was struggling with alcoholism. His tenure as the Armored Avenger lasted for four years, and even saw him as the version of Iron Man who went off to fight in the Secret Wars event. Rhodey has the added bonus of being a known quantity among MCU fans. Don Cheadle might've replaced Terrence Howard with the second movie in the Iron Man franchise, but the character has been around since the first Iron Man film. Then again, that might be a detriment. Cheadle's the same age as Downey, and while that obviously didn't keep him from some epic superhero action in Endgame, filmmakers might be looking for someone younger going forward. Endgame paid off plenty of plot points and lived up to its promise of being the end of an era, but the MCU shows no sign of slowing down anytime soon. So it makes sense that Endgame would also lay down a little foreshadowing of its own.  Keep watching the video to see how Iron Man could return after his Endgame death!",
    num_lectures: 1,
    num_videos: 1,
    num_students: 1701,
    num_reviews: 590,
    who_this_course_is_for: ["Iron Man enthusiasts", "Marvel fanatics", "Those with a theoretical mindset"],
    youtube_code: "https://www.youtube.com/embed/pr0MB6GH-oM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)


