# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# seed reset
User.destroy_all
Lecture.destroy_all
Course.destroy_all

# Users
User.create!(first_name: 'Jeffrey', last_name: 'Bui', email: 'jeffreykbui@gmail.com', password: '123456')
User.create!(first_name: 'Lana', last_name: 'Dann', email: 'lanadann@gmail.com', password: '123456')
User.create!(first_name: 'Francis', last_name: 'Anand', email: 'fanand@gmail.com', password: '123456')
User.create!(first_name: 'Meeko', last_name: 'Rayo', email: 'meeko@gmail.com', password: '123456')
User.create!(first_name: 'Tony', last_name: 'Stark', email: 'tony.stark@starkindustries.com', password: 'iloveironman')

# Lecture
Lecture.create!(title: "The Official MCU Timeline Explained")

# Courses
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

Course.create!(
    title: "How to Make a SPIDER-MAN WEB SHOOTER at home", 
    description: "Crafts course", 
    instructor: "Mad Stuff With Rob",
    price: 7.99, 
    duration: 16, 
    what_youll_learn: ["How to build a web-shooter", "Work with silly string", "Work with different types of plastics"], 
    requirements: ["Should be 18 years or older OR accompanied by an adult", "Have access to materials and tools"],
    course_description: "In this video I teach you how to make the Spiderman Web shooter with easily accessible materials like a sketch pen, cardboard, spring etc. Homies! Like always I got your back on making cool things and impressing your friends with Marvel gadgets. Video is in HINDI but you can put your ENGLISH subtitles on and watch",
    num_lectures: 1,
    num_videos: 1,
    num_students: 234,
    num_reviews: 56,
    who_this_course_is_for: ["Spidey fans!", "People who love arts and crafts", "Those who want to become Spider-Man"],
    youtube_code: "https://www.youtube.com/embed/GCfG9QAPrWY?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "Marvel Theory: Ultron Will Return", 
    description: "Theoretical course on the potential return of Ultron, and reasons behind it", 
    instructor: "Screen Rant",
    price: 14.99, 
    duration: 10, 
    what_youll_learn: ["How the Avengers villain Ultron could return", "Why would Ultron return?", "Key differences between Thanos and Ultron", "How robotics in Ultron can end the Avengers"], 
    requirements: ["Have seen Avengers: Age of Ultron", "Basic knowledge of MCU backstory", "General knowledge of MCU timelines", "Character abilities"],
    course_description: "Ultron is, of course, the classic robotic Marvel villain who was created by Roy Thomas and John Buscema back in 1968. He was created by Hank Pym in the comic books, but when he made his live action movie debut in 2015's Avengers: Age of Ultron, he was inadvertently created by Robert Downey Jr.'s Tony Stark and Mark Ruffalo's Bruce Banner. In the end, the powerful metallic antagonist - who was voiced by the great James Spader in the movie - was seemingly defeated, but there's a theory that he'll actually return in the Marvel Cinematic Universe in Phase 4 of the franchise. In this video, we'll be discussing how that might be possible. It's based on the fact that part of an Ultron drone was seen in 2017's Spider-Man: Homecoming, in the possession of Michael Keaton's Adrian Toomes, as part of his black market dealings in technology salvaged from the sites of superhero battles (he also had Chitauri technology from the Battle of New York in 2012's The Avengers, as well as Dark Elf technology from the events of 2014's Thor: The Dark World). While the drone wouldn't have contained Ultron's full consciousness, there's a chance it might have contained a seed-like code that would allow Ultron to be reborn, should the drone ever get exposed to a computer network that it could jump into.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 10655,
    num_reviews: 8599,
    who_this_course_is_for: ["MCU fans", "Critical thinkers", "Ultron fanatics", "Theorists", "Philosophy majors"],
    youtube_code: "https://www.youtube.com/embed/ss0DFSHKnNo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "Brothers?: What Everyone Forgot About Thanos and Tony Stark's Relationship", 
    description: "Theoretical course on the potential relationship between Thanos and Tony Stark", 
    instructor: "UpNext",
    price: 50.99, 
    duration: 5, 
    what_youll_learn: ["Tony Stark backstory", "Thanos backstory", "Understanding MCU timelines"], 
    requirements: ["Have seen Avengers: Infinity War", "Have seen Avengers: Endgame", "General Understanding of Thanos", "General Understanding of Iron Man history"],
    course_description: "Everybody knows (or should know) about Marvel's infamous villain Titan, Thanos. With the popular film series Marvel's Avengers, Thanos was introduced as the absolute super villain with the task of destroying half of the universe's population. Most of us who have seen the movies know both Thanos and Tony Stark, but what many of us don't know is a potential deeper connection between the two. This course goes over exactly that - the theory that there is a deeper connection between Thanos and Tony Stark!",
    num_lectures: 1,
    num_videos: 1,
    num_students: 3,
    num_reviews: 2,
    who_this_course_is_for: ["MCU fans", "Critical thinkers", "Thanos fanatics", "Theorists", "Philosophy majors"],
    youtube_code: "https://www.youtube.com/embed/5Wac2WKycZw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "All Infinity Gauntlet Powers", 
    description: "Learn about all of the powers and effects of the MCU Inifinty Gauntlet worn by Thanos", 
    instructor: "Parampreet Singh",
    price: 3.99, 
    duration: 4, 
    what_youll_learn: ["Infinity Gauntlet uses", "Infinity Stone powers"], 
    requirements: ["Have seen Avengers: Infinity War", "Have seen Avengers: Endgame", "Have seen Marvel movies with Infinity Stones", "Knowledge of MCU backstory across multiple movies"],
    course_description: "This course goes over the key powers of the Infinity Gauntlet worn by Thanos and how each Infinity Stone generates these powers.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 878,
    num_reviews: 322,
    who_this_course_is_for: ["MCU fans", "Infinity Gauntlet enthusiasts", "Thanos fans", "Those interested in learning more about Marvel history"],
    youtube_code: "https://www.youtube.com/embed/_oOiiqlfj60?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "Why Tony Snapped So Easily But Hulk Struggled?", 
    description: "Dive deeper into how Iron Man used the Infinity Gauntlet better than The Hulk", 
    instructor: "Kroft Talks Marvel",
    price: 119.99, 
    duration: 5, 
    what_youll_learn: ["Iron Man strength", "Hulk strength", "Key differences between our heroes", "How the Infinity Gauntlet affects the body","Infinity Stone Powers"], 
    requirements: ["Have seen Avengers: Infinity War", "Have seen Avengers: Endgame", "Have seen all Iron Man Movies", "Knowledge of MCU backstory across multiple movies", "3 years of Political Theory or equivalent"],
    course_description: "One of the questions I had after watching Endgame is that how come Tony snapped the infinity gauntlet fairly easy  compared to Hulk and Thanos. If you remember in Infinity War, once Thanos placed the mind stone in the gauntlet, he had to absorb the power of the stones and we could see the energy of every stone going throught his body. In addition, when he puts the gauntlet on in Endgame, even more energy can be seen g which may do to the fact that this time he wants to destroy the Entire Universe and not just a half of all life. Similar energy release happened when Hulk put the Infinity Gauntlet on his hand. Before snapping, the power of the stones already started to cause damage to his hand and to actually snap Hulk had so much difficulty that he had to hold the gauntlet with his other hand. However, a slightly different thing happens when Tony get’s all the stones. His nano-armor transforms into a gauntlet and assembles the stones into right places. We can still see the energy going through his suit but Tony doesn’t seem to struggle to contain the energy of the stones, instead he snaps fairly easily, after saying that he is Iron Man, which I though was an incredible moment.  So how exactly he was able to snap relatively easily compared to Hulk and Thanos without strugling to handle the energy of the stones? There are 2 possible theories to answer this question. The first one is based on Tony’s intelligence and his suit. If you’ve been paying attention and following every MCU movies, he can notice that everytime Tony encounters some kind of problem with his suit he fixes it in the next movie. For exmaple, when Thor hit him with lightnings in the first avengers film, he then redesigns his suit to be capable of absorbing energy. He also solves the problem of always carrying his suit with him by breaking down the suit in multiple parts that can kinda of fly to him anywhere he goes. He then replaces with with nano particles which is even better.  In Avengers Endgame, before Tony snaps, Thor charges his suit with lightnings on purpose so that he can strike Thanos. In the same way, once all the infinity stones are in place on Tony’s hand, his suit actually absorbs the evergy that is released from the stones. Another important thing to remember is that after gathering all stones from multiple timelines, Tony and other avengers spend undetermined amount of time making the Gauntlet. During that time Tony probably adjusted his suit to be able to absorb the energy of the stones in case he would need it. That’s why he didn’t have to struggle the same way as Hulk or Thanos. There exists a second theory might offer a better explanation. When Thanos added the last infinity stone to the gauntlet he had an intention of whipping out half of all the living creatures in the universe. If you think about how big if the universe in the marvel fantasy world and how many different planets there are populated with life, then it’s clear that Thanos snap required an extreme amount of energy. Same thing with Hulk, bring back everybody that Thanos snaped away need an equaly large amout of energy if not more. For these reasons, Hulk really struggled to snap his fingers. However, Tony’s snap required less energy since his intention was to eliminate Thanos and his army. Much smaller objective that bringing back half of all life in the universe. For that reason he could snap fairly easily. However, despite the suit, using the infinity stones was enough to cause irreversible damage that led to Tony’s death, which was a sad moment and an  anticipated conclusion to his character. To conclude these are possible explanations on how Tony could snap fairly easily compared to Hulk, Let me know in the comments which theory do you think is the most accurate.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 10233,
    num_reviews: 1988,
    who_this_course_is_for: ["MCU fans", "Infinity Gauntlet enthusiasts", "Thanos fans", "Those interested in learning more about Marvel history"],
    youtube_code: "https://www.youtube.com/embed/1DrUoX6WZuc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "The REAL Reason Why Tony Stark is The Only Avenger Thanos FEARS in EndGame", 
    description: "Shed light on why Iron Man is the main Avenger to defeat the Mad Titan", 
    instructor: "Dash Star",
    price: 69.99, 
    duration: 12, 
    what_youll_learn: ["Iron Man strength", "Key differences between our heroes", "How the Infinity Gauntlet affects the body","Infinity Stone Powers"], 
    requirements: ["Have seen Avengers: Infinity War", "Have seen Avengers: Endgame", "Have seen all Iron Man Movies", "Knowledge of MCU backstory across multiple movies"],
    course_description: "This course goes into how the Mad Titan, Thanos, was able to defeat so many heroes, but feared Iron Man the most. Is there a reason why Tony is the most fearsome? Doesn't the fact that he's a normal human make him seem more insignificant compared to other heroes? You'll figure out the answers to these questions once you finish the course!",
    num_lectures: 1,
    num_videos: 1,
    num_students: 874,
    num_reviews: 212,
    who_this_course_is_for: ["MCU fans", "Iron Man fans", "Those interested in learning more about Marvel history", "Those interested in becoming someone like Tony Stark", "Iron Man lovers"],
    youtube_code: "https://www.youtube.com/embed/MUeTA0WwKsI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "How to get Captain America's body", 
    description: "Want to look like Captain America?", 
    instructor: "toptenfamous",
    price: 59.99, 
    duration: 6, 
    what_youll_learn: ["How to achieve that super hero body like Chris Evans", "How to lift", "Basic exercises" ,"Strict diet and eating regimen", "Look and feel like Captain America"], 
    requirements: ["Must be 18 years or older", "Access to various workout equipments", "Access to a gym", "No serious prior injuries"],
    course_description: "Want to look and feel like Captain America? Our course goes into how Chris Evans transformed himself to embody America's hero. From his smaller figure to becoming a 'hero', Chris stuck through this strict workout and diet routine to achieve his body. Now, you can do the same! Take this course to transform your body.",
    num_lectures: 1,
    num_videos: 1,
    num_students: 1151,
    num_reviews: 132,
    who_this_course_is_for: ["People interested in working out", "Those who had no prior injuries and are ready to exercise", "Anyone looking to be a super hero", "Anyone interested in looking like Chris Evans"],
    youtube_code: "https://www.youtube.com/embed/JQx1_YDYiB0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)

Course.create!(
    title: "Why We Should Be Worried About The Hulk After Avengers Endgame", 
    description: "Could The Hulk Turn Into The Maestro After Avengers: Endgame?", 
    instructor: "CBR",
    price: 19.99, 
    duration: 10, 
    what_youll_learn: ["What could happen to the Hulk after the events in Avengers: Endgame", "Why the Hulk?", "Is this transition probable?", "History of the Hulk and his past relationships", "How the Hulk became the person he is today"], 
    requirements: ["Have seen The Avengers", "Have seen The Avengers: Age of Ultron", "Have seen The Avengers: Infinity War", "Have seen The Avengers: Endgame", "Basic understanding of MCU history"],
    course_description: "The Hulk and Bruce Banner are very loveable characters, especially in Avenger: Endgame, where Marvel displays a much gentler and controlled side of The Hulk. But what happened in that film that could change his role in the MCU? This course goes into the theory behind how the Hulk can turn into The Maestro after the events that took place during Endgame. This course dives into the psychology behind this character, and how it can be a perfect fit for The Hulk to transform into something completely different. Take this course to learn more! ",
    num_lectures: 1,
    num_videos: 1,
    num_students: 699,
    num_reviews: 409,
    who_this_course_is_for: ["Hulk fans", "Critical thinkers", "This course is for people interested in the theoretical side of the MCU" ,"Psychology majors", "MCU fans", "People who want the Hulk to become The Maestro"],
    youtube_code: "https://www.youtube.com/embed/AUlR6EtGsxQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
)


