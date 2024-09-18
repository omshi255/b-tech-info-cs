const notesobj = [
    {
        "IMG": "https://i.ytimg.com/vi/WQoB2z67hvY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBXhkWj-Qk8C5ZmzSa6LvSKfUJzQQ",
        "id": "1",
        "courseName": "Complete DSA - Placement course",
        "platform": "Youtube",
        "courseLink": "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
    },
    {
        "IMG": "https://qph.cf2.quoracdn.net/main-qimg-885a90a3b423f587f4c4900877af7fbb",
        "id": "2",
        "courseName": "Free Java Basic Course for Beginners",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/learn-java-basics-skillup"
    },
    {
        "IMG": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230706095706/intro-data-structure-%E2%80%93-1.png",
        "id": "3",
        "courseName": "DSA",
        "platform": "GFG",
        "courseLink": "https://www.geeksforgeeks.org/data-structures/"
    },
    {
        "IMG": "",
        "id": "4",
        "courseName": "Rust Tutorial",
        "platform": "Youtube",
        "courseLink": "https://youtu.be/U1EFgCNLDB8"
    },
    {
        "IMG": "https://i.ytimg.com/vi/zAOUpVM6R6I/hqdefault.jpg",
        "id": "6",
        "courseName": "SQL tutorial for everyone by Sumit Sir - Trendytech",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLtgiThe4j67rAoPmnCQmcgLS4iIc5ungg"
    },
    {
        "IMG": "",
        "id": "7",
        "courseName": "JavaScript for Beginners - 12 Hours (2022)",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=lI1ae4REbFM"
    },
    {
        "IMG": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1d8V7HoPdP4IOZRPunTaLE/2655263f9a57b560c9bb44e68d878790/Learner-Mariia-S-USA.png?auto=format%2Ccompress&dpr=2&w=612&h=375&q=40&fit=crop",
        "id": "8",
        "courseName": "Google Data Analytics Professional Certificate",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/professional-certificates/google-data-analytics"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2PX_vf0AQpimlMJUhi1fdAiGhJNWIydNwqb3FuquLMZbgUyGWpPd6ADI-TOiUei8oAg&usqp=CAU",
        "id": "701",
        "courseName": "HTML Complete Tutorial",
        "channel": "CodeHelp - by Babbar",
        "courseLink": "https://youtu.be/k7ELO356Npo?si=mI6WaS9PQa04om_c"
    },
    {
        "IMG": "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "id": "702",
        "courseName": "CSS Complete Tutorial ",
        "channel": "Thapa Technical",
        "courseLink": "https://youtu.be/MSICFljRcb4?si=w0gK4cMNe3PHoqBY"
    },
    {
        "IMG": "https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI",
        "id": "703",
        "courseName": "JavaScript Tutorial ",
        "channel": "CodeWithHarry",
        "courseLink": "https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=IMG4AkK3mOwMlP5_"
    },
    {
        "IMG": "https://miro.medium.com/v2/resize:fit:2000/1*iC6bSDaKufGxfpGCPfF2Mw.jpeg",
        "id": "704",
        "courseName": "Master Git & GitHub",
        "channel": "Sheryians Coding School",
        "courseLink": "https://youtu.be/YbX_5FTOgL8?si=5UdtPYSqxQeVIYmT"
    },
    {
        "IMG": "https://www.bleepstatic.com/content/hl-images/2022/07/05/NPM_head_pic.jpg",
        "id": "705",
        "courseName": "NPM Course",
        "channel": "Anurag Singh ProCodrr",
        "courseLink": "https://youtu.be/VnIUmD8Nj68?si=NniarqAqqp0BzBY3"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxTvkHmFKuqFSjiLwo5tgLQ5VN01C1L1Jri5kOfA_N4hKI2pUnv87sprDOEKVBfuxjpk&usqp=CAU",
        "id": "706",
        "courseName": "React JS",
        "channel": "Chai aur Code",
        "courseLink": "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=XOi9-0XXfx_VbJGy"
    },
    {
        "IMG": "https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2FSqfuPgK56ms%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=1a65585b034c966bef6f017d99e81530",
        "id": "14",
        "courseName": "Preventing Dementia",
        "platform": "Class Central",
        "courseLink": "https://www.classcentral.com/course/independent-preventing-dementia-6565"
    },

    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvEANX26lMKncEicX9CJCbgVx7lY6CKNPHu-ahu-8YMiHUPxbkpVOINwdAj8tRybqtko&usqp=CAU",
        "id": "521",
        "courseName": "introduction-to-supervised-learning",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/learn/supervised-learning-classification/introduction-to-supervised-learning"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScrnTjV1TS9AOIA01Cri_fBXyDTeYoqI9SwCm4pqODmVnAylJudJ0z_BivfQAia7ejIk&usqp=CAU",
        "id": "526",
        "courseName": "introduction-to-exploratory-data-analysis",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/courses/introduction-to-exploratory-data-analysis"
    },
    {
        "IMG": "https://i.ytimg.com/vi/6M5VXKLf4D4/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDSeTnjXPGUiaEETmKAOJdlHEOYTg",
        "id": "527",
        "courseName": "pre-requisites_for_deep_learning_bootcamp",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/courses/pre-requisites_for_deep_learning_bootcamp"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRkeU_cGQtdSqk9SnpVSdRGhmiQ21Ip3vvb5zrIqXdOfe2-B9-9VqPo6MptAMM2zDHDo&usqp=CAU",
        "id": "528",
        "courseName": "introduction-to-data-visualization",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/courses/introduction-to-data-visualization"
    },
    {
        "IMG": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/69/31e4501e1611e6a4391b9ced487d65/python_datascience_thumbnail_introduction_1x1.png",
        "id": "529",
        "courseName": "introduction-to-python-basics-for-data-science",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/learn/introduction-to-python-basics-for-data-science/introduction-to-python"
    },
    {
        "IMG": "https://miro.medium.com/v2/resize:fit:1358/0*Ab1aP4kjEWZzvGvW",
        "id": "531",
        "courseName": "machine-learning/crash-course",
        "platform": "Google",
        "courseLink": "https://developers.google.com/machine-learning/crash-course"
    },
    {
        "IMG": "https://images.ctfassets.net/fgtxcfpuxq93/1a73saBMJqFgqwJlTj8LN1/4cee02151af82968d9532b3bd28c1f86/Screenshot_2023-07-04_at_09.51.07.webp",
        "id": "532",
        "courseName": "introduction-to-pandas",
        "platform": "dphi",
        "courseLink": "https://dphi.tech/courses/introduction-to-pandas"
    },

    {
        "IMG": "https://www.novelvista.com/resources/images/course/list/Certified-Big-Data-Foundation-logo.webp",
        "id": "533",
        "courseName": "big-data",
        "platform": "cognitiveclass.ai",
        "courseLink": "https://cognitiveclass.ai/learn/big-data"
    },

    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "101",
        "courseName": "C++",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/cpp/"
    },
    {
        "IMG": "https://www.guvi.in/blog/wp-content/uploads/2023/07/Future-and-Scope-of-UIUX-Design.webp",
        "id": "240",
        "courseName": "UI UX",
        "platform": "youtube",
        "courseLink": "https://youtu.be/PgROIybhrd4"
    },
    {
        "IMG": "https://thumbs.dreamstime.com/z/ros-run-site-quality-surfing-coding-technologies-web-software-digital-graphic-scripts-business-monitoring-interfaces-poster-197349179.jpg",
        "id": "103",
        "courseName": "ROS",
        "platform": "ros.orgwiki",
        "courseLink": "https://www.ros.org"
    },

    {
        "IMG": "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Introduction-To-CSS-1.jpg",
        "id": "1167",
        "courseName": "Introduction to CSS",
        "platform": "Simplilearn",
        "courseLink": "https://www.simplilearn.com/learn-css-basics-free-training-course-skillup"
    },
    {
        "IMG": "https://media.licdn.com/dms/image/C5612AQF-At8NZdXBjw/article-cover_image-shrink_600_2000/0/1650859032476?e=2147483647&v=beta&t=BYP6gFz8dAKQh7NAIna6aE7RIA9H34mj7G25_mQ4BqU",
        "id": "696969",
        "courseName": "Android",
        "platform": "Udacity",
        "courseLink": " https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "1040",
        "courseName": "Python",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/python/default.asp"
    },
    {
        "IMG": "https://media.licdn.com/dms/image/C5612AQF-At8NZdXBjw/article-cover_image-shrink_600_2000/0/1650859032476?e=2147483647&v=beta&t=BYP6gFz8dAKQh7NAIna6aE7RIA9H34mj7G25_mQ4BqU",
        "id": "576",
        "courseName": "AI?ML",
        "platform": "Adrew",
        "courseLink": "https://www.linkedin.com/pulse/aiml-courses-galore-bhasker-gupta"
    },
    {
        "IMG": "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda",
        "id": "578",
        "courseName": "python",
        "platform": "geeksforgeeks",
        "courseLink": "http://www.geeksforgeeks.com"
    },
    {
        "IMG": "https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
        "id": "4000",
        "courseName": "Complete Web DEV",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
        "IMG": "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda",
        "id": "552",
        "courseName": "myMQL",
        "platform": "geeksforgeeks",
        "courseLink": "http://www.geeksforgeeks.com"
    },
    {
        "IMG": "https://miro.medium.com/v2/resize:fit:1400/1*_zpxxrf_wTfZQ52KxRuxEQ.jpeg",
        "id": "551",
        "courseName": "Cybersecurity",
        "platform": "Simpli learn",
        "courseLink": "https://www.simplilearn.com/learn-cyber-security-basics-skillup?term=C"
    },
    {
        "IMG": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION!~data-science-python/XDP~SPECIALIZATION!~data-science-python.jpeg",
        "id": "6000",
        "courseName": "Data science with python",
        "platform": "Simpli learn",
        "courseLink": "https://www.simplilearn.com/getting-started-data-science-with-python-skillup?term=Dat"
    },
    {
        "IMG": "https://images.codecademy.com/social/logo-codecademy-social.png",
        "id": "580",
        "courseName": "C++",
        "platform": "codecademy",
        "courseLink": "https://www.codecademy.com/learn/learn-c-plus-plus"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "1030",
        "courseName": "Javascript",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/js/default.asp"
    },
    {
        "IMG": "https://i.ytimg.com/vi/QeTbLkH64kQ/maxresdefault.jpg",
        "id": "29",
        "courseName": "UI/UX",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=QeTbLkH64kQ"
    },
    {
        "IMG": "https://img-b.udemycdn.com/course/750x422/433798_1de9_4.jpg",
        "id": "581",
        "courseName": "Introduction To Python Programming",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/pythonforbeginnersintro/"
    },
    {
        "IMG": "https://d2908q01vomqb2.cloudfront.net/cb4e5208b4cd87268b208e49452ed6e89a68e0b8/2021/09/15/BuildonAWS.png",
        "id": "4001",
        "courseName": "Amazon Web Services Cloud Practitioner ",
        "platform": "Amazon",
        "courseLink": "https://aws.amazon.com/"
    },
    {
        "IMG": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210531212642/Best-Tips-and-Strategies-to-Prepare-for-a-Coding-Interview.png",
        "id": "16",
        "courseName": "Coding Interview Prep",
        "platform": "FreeCodeCamp",
        "courseLink": "https://www.freecodecamp.org/learn/coding-interview-prep/"
    },
    {
        "IMG": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION!~data-science-python/XDP~SPECIALIZATION!~data-science-python.jpeg",
        "id": "6001",
        "courseName": "Data science ",
        "platform": "Simpli learn",
        "courseLink": "https://www.simplilearn.com/getting-started-data-science-with-python-skillup?term=Dat"
    },
    {
        "IMG": "https://cdn.educba.com/academy/wp-content/uploads/2016/05/Linux-Shell-Scripting.jpg",
        "id": "20",
        "courseName": "Linux bas (shell scripting)",
        "platform": "Swayam",
        "courseLink": "https://onlinecourses.swayam2.ac.in/aic20_sp05/preview"
    },
    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbO89i5oTybW6jIf-6Vyy9LU1V8gAzRZK79hUCTtKhbt7PiZb79_50qM6mJfjPhwR_Yw&usqp=CAU",
        "id": "3001",
        "courseName": "Full Stack Java Developer",
        "platform": "simplilearn",
        "courseLink": "https://www.simplilearn.com/java-full-stack-developer-certification-training-course?utm_source=google&utm_medium=cpc&utm_term=&utm_content=17794206227-139814028875-611092856388&utm_device=c&utm_campaign=Search-TechCluster-SD-FullStack-DSA-IN-Main-AllDevice-JGuarantee-adgroup-DSA-Full-Stack-Java-Developer-master&gclid=CjwKCAjwp9qZBhBkEiwAsYFsbyFVufRKw8qxUrC_WrPxPEN7Q4JC8Qr-g21N9jWgtXW6DsU1seZX6BoC4y0QAvD_BwE"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "102",
        "courseName": "java",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/java/default.asp"
    },
    {
        "IMG": "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~financial-markets-global/XDP~COURSE!~financial-markets-global.jpeg",
        "id": "21",
        "courseName": "Financial Markets",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/learn/financial-markets-global"
    },
    {
        "IMG": "https://i.ytimg.com/vi/eYpXCdvKwEQ/hqdefault.jpg",
        "id": "19",
        "courseName": "DBMS",
        "platform": "You Tube",
        "courseLink": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU"
    },
    {
        "IMG": "https://i.ytimg.com/vi/3c-iBn73dDE/maxresdefault.jpg",
        "id": "007",
        "courseName": "Docker",
        "platform": "You Tube",
        "courseLink": "https://youtu.be/3c-iBn73dDE"
    },
    {
        "IMG": "https://img-c.udemycdn.com/course/750x422/4914028_1e74_2.jpg",
        "id": "30",
        "courseName": "Python For Beginners",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/learn-python-basics-free-course-skillup?term=popular%20courses"
    },
    {
        "IMG": "https://www.webasha.com/uploads/exam/images/635fba83ebba31667218051.7_(3).jpg",
        "id": "22",
        "courseName": "AWS Developer Associate Certification Training",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/java-full-stack-developer-certification-training-course?tag=Advance%20java"
    },
    {
        "IMG": "https://i0.wp.com/www.coursejoiner.com/wp-content/uploads/2023/09/iiiiiiiit-1.jpg?resize=690%2C290&ssl=1",
        "id": "2300",
        "courseName": "Advanced Executive Program In Cybersecurity",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/pgp-advanced-executive-program-in-cyber-security?tag=Gaming%20programming"
    },
    {
        "IMG": "https://www.simplilearn.com/ice9/webinar_thum_image/PGP_cc.jpg",
        "id": "2500",
        "courseName": "Post Graduate Program In Cloud Computing",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/pgp-cloud-computing-certification-training-course?tag=Gaming%20programming"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "104",
        "courseName": "css",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/css/default.asp"
    },
    {
        "IMG": "https://artoftesting.com/wp-content/uploads/2020/03/introduction-to-java-featured.jpg",
        "id": "23",
        "courseName": "introduction to java",
        "platform": "swayam",
        "courseLink": "https://swayam.gov.in/nc_details/NPTEL"
    },
    {
        "IMG": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210707194050/A-Complete-Guide-to-Learn-Kotlin-for-Android-App-Development.png",
        "id": "24",
        "courseName": "Learn android kotlin",
        "platform": "Skillup",
        "courseLink": "https://developer.android.com/courses/android-basics-kotlin/course"
    },
    {
        "IMG": "https://prod-discovery.edx-cdn.org/media/course/image/956319ec-8665-4039-8bc6-32c9a9aea5e9-885268c71902.small.jpg",
        "id": "2900",
        "courseName": "Introduction to Computer Science and Programming Using Python",
        "platform": "EdX",
        "courseLink": "https://learning.edx.org/course/course-v1:MITx+6.00.1x+2T2022a/home"
    },
    {
        "IMG": "https://executive-education.spjain.org/hs-fs/hubfs/2021/landing-page/digital-supply-chain/digital-supply-chain-m.jpg?width=360&height=180&name=digital-supply-chain-m.jpg",
        "id": "2800",
        "courseName": "Professional Certificate Program in Digital Supply Chain Management",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/pgp-digital-supply-chain-management-certification-training-course?tag=time%20management"
    },
    {
        "IMG": "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-pillar-page-overview.jpeg",
        "id": "25",
        "courseName": "Machine Learning",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/pgp-machine learning?tag=Gaming%20programming"
    },
    {
        "IMG": "https://www.saviantconsulting.com/images/blog/10-reasons-why-choose-azure-for-your-enterprise.png",
        "id": "26",
        "courseName": "Microsoft Azure Cloud Program",
        "platform": "Microsoft Azure",
        "courseLink": "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
    },
    {
        "IMG": "https://blog.happyfox.com/wp-content/uploads/2020/09/Data-Science-and-Data-Analytics-_-What-is-the-difference_.png",
        "id": "27",
        "courseName": "Data Science And Analytics",
        "platform": "Upgrad",
        "courseLink": "https://learn.upgrad.com/course/4401"
    },
    {
        "IMG": "https://img-c.udemycdn.com/course/480x270/2259120_305f_6.jpg",
        "id": "2801",
        "courseName": "Flutter Development Udemy",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/flutter-bootcamp-with-dart/"
    },
    {
        "IMG": "https://datapatrons.com/wp-content/uploads/2022/03/python-course.png",
        "id": "2700",
        "courseName": "Free Python Certification Course",
        "platform": "Data Flair",
        "courseLink": "https://data-flair.training/python-course/"
    },

    {
        "IMG": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7VXph8RWzKuuTUM5giNQxjjRE96WWhd5fw&usqp=CAU",
        "id": "3002",
        "courseName": "AWS Course for AWS Certified Cloud Practitioner",
        "platform": "Data Flair",
        "courseLink": "https://data-flair.training/courses/aws-certified-cloud-practitioner/"
    },
    {
        "IMG": "https://www.classcentral.com/report/wp-content/uploads/2022/04/algorithms-and-data-structures-banner.png",
        "id": "42",
        "courseName": "Data Structures and Algorithms Certification Course in C",
        "platform": "Data Flair",
        "courseLink": "https://data-flair.training/courses/data-structures-and-algorithms/"
    },
    {
        "IMG": " ",
        "id": "47",
        "courseName": "Big Data Certification Course with Hadoop & Spark",
        "platform": "Data Flair",
        "courseLink": "https://data-flair.training/hadoop-spark-developer-course/"
    },
    {
        "IMG": " ",
        "id": "31",
        "courseName": "Unity 3D",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/course/beginner-2d-game-development-in-unity"
    },
    {
        "IMG": " ",
        "id": "07",
        "courseName": "Python foundation course",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/free-python-foundation-course-skillup?tag=Python"
    },
    {
        "IMG": " ",
        "id": "100",
        "courseName": "Introduction To Python Programming",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/pythonforbeginnersintro/"
    },
    // {
    //     "IMG": "",
    //     "id": "123",
    //     "courseName": "Machine Learning for Beginners",
    //     "platform": "Great Learning",
    //     "courseLink": "https://www.mygreatlearning.com/great-lakes-artificial-intelligence-and-machine-learning?&utm_source=google&utm_medium=Search&utm_campaign=AIML_Pune_Purchase_Intent-Course_AIML_Combined&adgroup_id=106440164291&campaign_id=9971246354&keyword=machine%20learning%20course&placement=&gclid=EAIaIQobChMI9PT1tOC8-gIVEyQrCh2PbAwpEAAYASAAEgKrDvD_BwE"
    // },
    {
        "IMG": " ",
        "id": "2406",
        "courseName": "An Introduction to Photography (FREE Course)",
        "platform": "Karl Taylor",
        "courseLink": "https://karltayloreducation.com/free-photography-course/"
    },
    {
        "IMG": "",
        "id": "553",
        "courseName": "Learn to Program in Javascript",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/programming-in-javascript/"
    },
    {
        "IMG": " ",
        "id": "455",
        "courseName": "DataStructure Algo",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/share/105kbg3@8l6O_HqowqPJO4WMXBDoYlkk3C2ZjZHYNsKmAvRr22UWvXol6NOjq8J3L0xowkCMJA==/"
    },
    {
        "IMG": " ",
        "id": "3800",
        "courseName": "Building Web applications with Java Spring Boot",
        "platform": "Alison",
        "courseLink": "https://alison.com/courses/building-web-applications-with-java-spring-boot/content#event=login"
    },


    {
        "IMG": " ",
        "id": "1240",
        "courseName": "Complete Data Science Bootcamp",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/"
    },
    {
        "IMG": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202206/jobportal-1640079041-sixteen_nine.jpeg?size=1200:675",
        "id": "6900",
        "courseName": "Basics of c++",
        "platform": "Simply Learn",
        "courseLink": "https://www.simplilearn.com/free-course-to-learn-cpp-basics-skillup"
    },
    {
        "IMG": " ",
        "id": "70",
        "courseName": "Introduction To Python Programming",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/share/101r1i/"
    },
    {
        "IMG": " ",
        "id": "7101",
        "courseName": "Javascript Essentials",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/course/javascript-essentials/"
    },
    {
        "IMG": " ",
        "id": "48",
        "courseName": "Basic Data Structures And Algorithms by Google",
        "platform": "Google",
        "courseLink": "https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/"
    },
    {
        "IMG": " ",
        "id": "71",
        "courseName": "FULL STACK DEVELOPER",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/share/front end"
    },
    {
        "IMG": "https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg",
        "id": "3010",
        "courseName": "DSA learnig with java",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
    },
    {
        "IMG": " ",
        "id": "3100",
        "courseName": "dsa with placement preparation with apna college",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
    },
    {
        "IMG": " ",
        "id": "32",
        "courseName": "IBM Machine Learning Professional",
        "platform": "Coursera",
        "courseLink": "https://in.coursera.org/professional-certificates/ibm-machine-learning"
    },
    {
        "IMG": " ",
        "id": "37",
        "courseName": "Android Development",
        "platform": "Officially By Google",
        "courseLink": "https://developer.android.com/courses/android-basics-compose/course"
    },
    {
        "IMG": " ",
        "id": "38",
        "courseName": "Machine Learning",
        "platform": "hARVARD",
        "courseLink": "https://www.mybib.com/tools/harvard-referencing-generator"
    },
    {
        "IMG": "",
        "id": "333",
        "courseName": "CET Preparation",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/results?search_query=matrix+science+academy"
    },
    {
        "IMG": " ",
        "id": "39",
        "courseName": "udemy",
        "platform": "python learning",
        "courseLink": "https://www.udemy.com/course/pythonforbeginners/"
    },
    {
        "IMG": "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda",
        "id": "145",
        "courseName": " WebDevelopment",
        "platform": "GeeksforGeeks",
        "courseLink": "https://www.geeksforgeeks.org/web-development/"
    },
    {
        "IMG": " ",
        "id": "2410",
        "courseName": "Project Managment",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/it-project-management-for-beginners-a-step-by-step-guide/"
    },
    {
        "IMG": " ",
        "id": "1000",
        "courseName": "Java Programming",
        "platform": "Google",
        "courseLink": "https://www.programiz.com/java-programming"
    },
    {
        "IMG": " ",
        "id": "583",
        "courseName": "Java Programming  + DSA",
        "platform": "apna college",
        "courseLink": "https://www.apnacollege.in/course/placement-course-java"
    },
    {
        "IMG": " ",
        "id": "5012",
        "courseName": "Digital Marketing",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/courses/marketing/digital-marketing/"
    },
    {
        "IMG": "https://i.ytimg.com/vi/b8LpbYbmSwA/maxresdefault.jpg",
        "id": "5000",
        "courseName": "Flutter Tutorials",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLR2qQy0Zxs_UdqAcaipPR3CG1Ly57UlhV"
    },
    // {
    //     "IMG": " ",
    //     "id": "1011",
    //     "courseName": "Bootstrap in Hindi",
    //     "platform": "Great Learning",
    //     "courseLink": "https://www.mygreatlearning.com/academy/learn-for-free/courses/bootstrap-in-hindi"
    // },
    {
        "IMG": "https://i.ytimg.com/vi/w9AbHXPKp_s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj0v9JTDh615DOw8z5ZaFRplUelA",
        "id": "5001",
        "courseName": "Complte C++ Dsa Placement Course",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
    },
    {
        "IMG": "https://i.ytimg.com/vi/bm0OyhwFDuY/hqdefault.jpg",
        "id": "5002",
        "courseName": "Java Tutorials for Beginners",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/iCmL91ZFSXbjL2P2mZlEaMpjIULEPP419eK0ivH5l_0AOo4OscCCoNRLIzBDzOUn2maQ4jqQ=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        "id": "5003",
        "courseName": "Learn Dart Language in Hindi",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=YyvWaEwSJ84&list=PLWCLxMult9xeeY5NDx4JIWqEnXnlG3fKc"
    },

    {
        "IMG": "https://preview.redd.it/studying-basic-to-advanced-java-and-web-development-from-v0-4hmrwszl7xfa1.jpg?auto=webp&s=7e48de30b47b26eddb8187766fa62b765e591c18",
        "id": "584",
        "courseName": "Code With Harry",
        "platform": "youtube",
        "courseLink": "https://www.codewithharry.com/"
    },
    {
        "IMG": "https://i.ytimg.com/vi/ZzRT6pyROz4/hqdefault.jpg",
        "id": "444",
        "courseName": "C++ full course by saurabh shukla",
        "platform": "youtube",
        "courseLink": "https://youtu.be/ZzRT6pyROz4?si=KbD0YHBFkYJwBrmD"
    },
    {
        "IMG": " ",
        "id": "445",
        "courseName": "Machine Learning",
        "platform": "SoloLearn",
        "courseLink": "https://www.sololearn.com/learning/1094"
    },
    {
        "IMG": "https://www.freecodecamp.org/news/content/images/2022/01/machine-learning-banner-2.png",
        "id": "247",
        "courseName": "Machine Learning Course for Beginners",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=NWONeJKn6kc"
    },
    {
        "IMG": " ",
        "id": "40",
        "courseName": "Digital Art",
        "platform": "Domestika",
        "courseLink": "https://www.domestika.org/"
    },
    {
        "IMG": " ",
        "id": "41",
        "courseName": "Python Regression Analysis: Statistics & Machine Learning",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/python-regression-analysis-statistics-machine-learning/"
    },
    {
        "IMG": " ",
        "id": "570",
        "courseName": " Java ",
        "platform": "SoloLearn",
        "courseLink": "https://www.sololearn.com/learning/1068"
    },
    {
        "IMG": " ",
        "id": "50",
        "courseName": "Intro to Golang",
        "platform": "freecodecampe",
        "courseLink": "https://www.freecodecamp.org/news/what-is-go-programming-language/"
    },
    {
        "IMG": " ",
        "id": "572",
        "courseName": "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/100-days-of-code/"
    },
    {
        "IMG": " ",
        "courseName": "Fundamentals of Digital Marketing",
        "platform": "Google",
        "courseLink": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing/"
    },
    {
        "IMG": " ",
        "id": "911",
        "courseName": "Introduction to Data Science",
        "platform": "Simplilearn",
        "courseLink": "https://www.simplilearn.com/data-science-free-course-for-beginners-skillup"
    },
    {
        "IMG": " ",
        "id": "176",
        "courseName": "Introductory To JavaScript",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/the_complete_javascript_course_for_beginners/"
    },
    {
        "IMG": " ",
        "id": "177",
        "courseName": "Selenium",
        "platform": "Javatpoint",
        "courseLink": "https://www.javatpoint.com/selenium-tutorial"
    },
    {
        "IMG": " ",
        "id": "178",
        "courseName": "CS50's Introduction to Computer Science",
        "platform": "edX",
        "courseLink": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    },
    {
        "IMG": " ",
        "id": "179",
        "courseName": "Swift for Beginners ",
        "platform": "YouTube",
        "courseLink": "https://youtube.com/playlist?list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW"
    },
    {
        "IMG": " ",
        "id": "08",
        "courseName": "Excel Basics for Data Analysis",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/learn/excel-basics-data-analysis-ibm/home/week/1"
    },
    {
        "IMG": " ",
        "id": "120",
        "courseName": "Master Web Backend",
        "platform": "CodeBeyond",
        "courseLink": "https://www.youtube.com/watch?v=8-YDYE2JOS0&list=PLN4aKSfpk8TTD3g83qIK4PiNsImxWK-6x"
    },
    {
        "IMG": " ",
        "id": "121",
        "courseName": "Git Tutorial",
        "platform": "Skillup",
        "courseLink": "https://www.simplilearn.com/tutorials/git-tutorial"
    },
    {
        "IMG": " ",
        "id": "180",
        "courseName": "Explore blockchain technology",
        "platform": "Chainlink",
        "courseLink": "https://chain.link/education"
    },
    {
        "IMG": " ",
        "id": "220",
        "courseName": "Learn JavaScript - Full Course for Beginners",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=PkZNo7MFNFg&t=10151s"
    },
    {
        "IMG": " ",
        "id": "221",
        "courseName": "Learn Web Development For Free",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/web-developer-course-on-creating-a-business-website/"
    },
    {
        "IMG": " ",
        "id": "689",
        "courseName": "Python 3 For Offensive PenTest: A Complete Practical Course",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/python-for-offensive-security-practical-course/"
    },
    {
        "IMG": " ",
        "id": "222",
        "courseName": "Golang Tutorial for Beginners | Full Go Course",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=yyUHQIec83I"
    },
    {
        "IMG": " ",
        "id": "223",
        "courseName": "Free Comptia Cloud Basic Course ",
        "platform": "Alison",
        "courseLink": "https://alison.com/course/comptia-cloud-basic"
    },
    {
        "IMG": " ",
        "id": "224",
        "courseName": "Introduction To Python Programming Language",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/share/101r1i/"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "90",
        "courseName": "Python",
        "platform": "W3Schools",
        "courseLink": "https://www.w3schools.com/python/default.asp"
    },
    {
        "IMG": "https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda",
        "id": "433",
        "courseName": "GATE CSE 2023 Live",
        "platform": "geeksforgeeks",
        "courseLink": "https://practice.geeksforgeeks.org/courses/gate-live-course"
    },
    {
        "IMG": " ",
        "id": "434",
        "courseName": "Learn React",
        "platform": "scrimba",
        "courseLink": "https://scrimba.com/learn/learnreact"
    },
    {
        "IMG": " ",
        "id": "435",
        "courseName": "AWS Cloud Practitioner",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=3hLmDS179YE"
    },
    {
        "IMG": " ",
        "id": "436",
        "courseName": "SQL and Databases - A Full Course for Beginners",
        "platform": "freeCodeCamp",
        "courseLink": "https://www.freecodecamp.org/news/sql-and-databases-full-course/"
    },
    {
        "IMG": " ",
        "id": "600",
        "courseName": "Python Regression Analysis: Statistics & Machine Learning",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/python-regression-analysis-statistics-machine-learning/"
    },
    {
        "IMG": " ",
        "id": "412",
        "courseName": "DevOps Bootcamp",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak"
    },
    {
        "IMG": " ",
        "id": "226",
        "courseName": "Web Development Course",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
    },
    {
        "IMG": " ",
        "id": "227",
        "courseName": "Product Retouching - By PiXimperfect",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/playlist?list=PLLlSBGLVsEPL79S7O30F_Jdjq_EN4Jj6M"
    },
    {
        "IMG": " ",
        "id": "603",
        "courseName": "Android Architecture Components & Jetpack",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLRKyZvuMYSIO0jLgj8g6sADnD0IBaWaw2"
    },
    {
        "IMG": " ",
        "id": "229",
        "courseName": "Get a Business Online",
        "platform": "Google Digital Garage",
        "courseLink": "https://learndigital.withgoogle.com/digitalgarage/course/business-online"
    },

    {
        "IMG": " ",
        "id": "231",
        "courseName": "Getting Started with Angular 2+",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/getting-started-with-angular-2/"
    },
    {
        "IMG": " ",
        "id": "630",
        "courseName": "JSP (Java server pages) and servlet basics",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/jsp-servlet-free/"
    },
    {
        "IMG": " ",
        "id": "233",
        "courseName": "Introduction to Bootstrap 3",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/introduction-to-bootstrap-3/"
    },
    {
        "IMG": " ",
        "id": "562",
        "courseName": "Mongodb Tutorial",
        "platform": "Great Learning Academy",
        "courseLink": "https://www.mygreatlearning.com/academy/learn-for-free/courses/mongodb-tutorial"
    },

    {
        "IMG": " ",
        "id": "563",
        "courseName": "Free Web-Development Course",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "564",
        "courseName": "Introduction to SQL",
        "platform": "w3schools",
        "courseLink": "https://www.w3schools.com/sql/sql_intro.asp"
    },
    {
        "IMG": " ",
        "id": "2360",
        "courseName": "React JS - React Tutorial for Beginners",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/watch?v=Ke90Tje7VS0"
    },
    {
        "IMG": " ",
        "id": "228",
        "courseName": "Learn SQL / MySQL database basics FOR FREE",
        "platform": "UDEMY",
        "courseLink": "https://www.udemy.com/course/learn-sqlmysql-database-basics-for-free/"
    },



    {
        "IMG": " ",
        "id": "628",
        "courseName": "JSP (Java server pages) and servlet basics",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/jsp-servlet-free/"
    },
    {
        "IMG": " ",
        "id": "626",
        "courseName": "Introduction to Bootstrap 3",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/introduction-to-bootstrap-3/"
    },
    {
        "IMG": " ",
        "id": "620",
        "courseName": "Practical Ethical Hacking - The Complete Course",
        "platform": "TCM Security",
        "courseLink": "https://academy.tcm-sec.com/courses/enrolled/1152300"
    },

    {
        "IMG": " ",
        "id": "230",
        "courseName": "Fundamentals of Digital Marketing",
        "platform": "Google Digital Garage",
        "courseLink": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing"
    },
    {
        "IMG": " ",
        "id": "232",
        "courseName": "JSP (Java server pages) and servlet basics",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/jsp-servlet-free/"
    },
    {
        "IMG": " ",
        "id": "627",
        "courseName": "Introduction to Bootstrap 3",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/introduction-to-bootstrap-3/"
    },
    {
        "IMG": " ",
        "id": "621",
        "courseName": "Practical Ethical Hacking - The Complete Course",
        "platform": "TCM Security",
        "courseLink": "https://academy.tcm-sec.com/courses/enrolled/1152300"
    },
    {
        "IMG": " ",
        "id": "624",
        "courseName": "PNPT",
        "platform": "TCM Security",
        "courseLink": "https://academy.tcm-sec.com/p/pnpt-live"
    },
    {
        "IMG": " ",
        "id": "237",
        "courseName": "Dynamic Programming playlist by take U forward (Striver)",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY"
    },

    {
        "IMG": "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
        "id": "235",
        "courseName": "C++ Tutorial for beginners in hindi",
        "platform": "YouTube",
        "courseLink": "https://youtu.be/Umm1ZQ5ltZw"
    },
    {
        "IMG": " ",
        "id": "622",
        "courseName": "Linux Shell Scripting: A Project-Based Approach to Learning",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/linux-shell-scripting-projects/"
    },

    {
        "IMG": " ",
        "id": "2366",
        "courseName": "Git and Github tutorial for begineer in hindi",
        "platform": "Youtube",
        "courseLink": "https://youtu.be/gwWKnnCMQ5c"
    },

    {
        "IMG": " ",
        "id": "4003",
        "courseName": "Microsoft Excel - Excel from Beginner to Advanced ",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/microsoft-excel-2013-from-beginner-to-advanced-and-beyond/"
    },
    {
        "IMG": " ",
        "id": "291",
        "courseName": "NodeJs Tutorial in Hindi 2020 ",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
    },
    {
        "IMG": " ",
        "id": "4004",
        "courseName": "Microsoft Excel - Excel from Beginner to Advanced ",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/microsoft-excel-2013-from-beginner-to-advanced-and-beyond/"
    },
    {
        "IMG": " ",
        "id": "617",
        "courseName": "Windows Powershell in Hindi",
        "platform": "Youtube",
        "courseLink": "https://youtube.com/playlist?list=PLRu7mEBdW7fDlf80vMmEJ4Vw9uf2Gbyc_"
    },
    {
        "IMG": " ",
        "id": "612",
        "courseName": "Introduction to UI/UX",
        "platform": "Coursera",
        "courseLink": "https://bit.ly/3rDQaXR"
    },
    {
        "IMG": " ",
        "id": "614",
        "courseName": "Learn Responsive Design",
        "platform": "web.dev",
        "courseLink": "https://web.dev/learn/design"
    },
    {
        "IMG": " ",
        "id": "607",
        "courseName": "Introduction to UI/UX",
        "platform": "Coursera",
        "courseLink": "https://bit.ly/3rDQaXR"
    },
    {
        "IMG": " ",
        "id": "608",
        "courseName": "Learn Responsive Design",
        "platform": "web.dev",
        "courseLink": "https://web.dev/learn/design"
    },
    {
        "IMG": " ",
        "id": "2382",
        "courseName": "Django-Course Full",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/watch?v=5BDgKJFZMl8&list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9"
    },
    {
        "IMG": " ",
        "id": "2383",
        "courseName": "Python Course",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=gfDE2a7MKjA"
    },
    {
        "IMG": " ",
        "id": "2384",
        "courseName": "Information Security",
        "platform": "freecodecamp",
        "courseLink": "https://www.freecodecamp.org/learn/information-security/"
    },
    {
        "IMG": " ",
        "id": "2385",
        "courseName": "Python for Data Science and Machine Learning",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/learn/lecture/5760236#overview"
    },
    {
        "IMG": "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
        "id": "2386",
        "courseName": "Introduction to XML",
        "platform": "w3schools",
        "courseLink": "https://www.w3schools.com/xml/xml_whatis.asp"
    },
    {
        "IMG": " ",
        "id": "999",
        "courseName": "Machine Learning A-Z™: Hands-On Python & R In Data Science",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/share/101Wci3@9Vsm4iWEj8qyQ1SgmYbZiOnul7kh-dfAyr9sTtEZ-aH02JmedcU7-nVinOSyegWWog==/"
    },
    {
        "IMG": " ",
        "id": "2387",
        "courseName": "Getting Started with Angular 2+",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/getting-started-with-angular-2/"
    },
    {
        "IMG": " ",
        "id": "2389",
        "courseName": "Introduction to unity ",
        "platform": "unity",
        "courseLink": "https://unity.com/learn"
    },
    {
        "IMG": " ",
        "id": "2390",
        "courseName": "Getting Started with Angular 2+",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/getting-started-with-angular-2/"
    },
    {
        "IMG": " ",
        "id": "9999",
        "courseName": "Introduction to unity ",
        "platform": "unity",
        "courseLink": "https://unity.com/learn"
    },
    {
        "IMG": " ",
        "id": "9997",
        "courseName": "Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=RBSGKlAvoiM"
    },
    {
        "IMG": " ",
        "id": "560",
        "courseName": "APIs for Beginners - How to use an API (Full Course / Tutorial)",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/watch?v=GZvSYJDk-us"
    },
    {
        "IMG": " ",
        "id": "9996",
        "courseName": "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/nodejs-the-complete-guide/"
    },
    {
        "IMG": " ",
        "id": "9995",
        "courseName": "Python Certification Course",
        "platform": "Intellipaat",
        "courseLink": "https://intellipaat.com/python-certification-training-online"
    },
    {
        "IMG": " ",
        "id": "9992",
        "courseName": "Google Project Management: Professional Certificate",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/professional-certificates/google-project-management"
    },
    {
        "IMG": " ",
        "id": "9991",
        "courseName": "Learn HTML5 and CSS3 from Scratch",
        "platform": "Youtube",
        "courseLink": "https://youtu.be/mU6anWqZJcc"
    },
    {
        "IMG": " ",
        "id": "55",
        "courseName": "Data structures Course for Beginners",
        "platform": "Javatpoint",
        "courseLink": "https://www.javatpoint.com/data-structure-tutorial"
    },
    {
        "IMG": " ",
        "id": "57",
        "courseName": "Blockchain Specialization",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/specializations/blockchain"
    },
    {
        "IMG": " ",
        "id": "501",
        "courseName": "M001 Basics(MongoDB)",
        "platform": "MongoDb University",
        "courseLink": "https://university.mongodb.com/courses/M001/about"
    },
    {
        "IMG": "https://images.codecademy.com/social/logo-codecademy-social.png",
        "id": "502",
        "courseName": "Go (or Golang) is an open source programming language",
        "platform": "codecademy",
        "courseLink": "https://www.codecademy.com/learn/learn-go"
    },
    {
        "IMG": " ",
        "id": "503",
        "courseName": "DevOps Engineering",
        "platform": "freecodecamp",
        "courseLink": "https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/"
    },
    {
        "IMG": " ",
        "id": "56",
        "courseName": "Data Scientist with R",
        "platform": "DataCamp",
        "courseLink": "https://www.datacamp.com/onboarding/learn?technology=r"
    },
    // {
    //     "IMG": " ",
    //     "id": "555",
    //     "courseName": "Python fundamentals for beginners",
    //     "platform": "Great Learning",
    //     "courseLink": "https://www.mygreatlearning.com/academy/courses/3017002/12682#?utm_source=share_with_friends"
    // },
    {
        "IMG": " ",
        "id": "550",
        "courseName": "Data science",
        "platform": "educba",
        "courseLink": "https://www.educba.com/data-science/courses/"
    },
    {
        "IMG": " ",
        "id": "549",
        "courseName": "Java Programming",
        "platform": "coursera",
        "courseLink": "https://www.coursera.org/specializations/java-programming"
    },
    {
        "IMG": " ",
        "id": "9901",
        "courseName": "Free Flutter Course by Vandad Nahavandipoor",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=IfUjHNODRoM&list=PL6yRaaP0WPkVtoeNIGqILtRAgd3h2CNpT",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "5900",
        "courseName": "Fundamentals of digital marketing",
        "platform": "Google",
        "courseLink": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "60",
        "courseName": "Google Cloud Computing Foundations",
        "platform": "Google",
        "courseLink": "https://learndigital.withgoogle.com/digitalgarage/course/gcloud-computing-foundations",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "61",
        "courseName": "Building Web Applications with Java Spring Boot",
        "platform": "Alison",
        "courseLink": "https://alison.com/course/building-web-applications-with-java-spring-boot",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "62",
        "courseName": "Python for everybody",
        "platform": "Google",
        "courseLink": "https://www.py4e.com/lessons",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "63",
        "courseName": " Python for Beginners",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "64",
        "courseName": " Introduction to JavaScript:First Steps",
        "platform": "Google",
        "courseLink": "https://www.educative.io/courses/introduction-to-javascript-first-steps?affiliate_id=5073518643380224",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "65",
        "courseName": " Machine Learning for All",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/learn/uol-machine-learning-for-all",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "66",
        "courseName": " IBM Data Science Professional Certificate",
        "platform": "Coursera",
        "courseLink": "https://www.coursera.org/professional-certificates/ibm-data-science?irclickid=SZT3S3wElxyNUfJ1ajTOLyNMUkDQIDw3F2fwQ80&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=1359419&utm_content=b2c",
        "type": "free"
    },
    {
        "IMG": " ",
        "id": "9903",
        "courseName": "Python",
        "platform": "Youtube",
        "courseLink": "https://www.youtube.com/watch?v=rfscVS0vtbw&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB"
    },
    {
        "IMG": " ",
        "id": "9904",
        "courseName": "Python Regression Analysis: Statistics & Machine Learning",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/python-regression-analysis-statistics-machine-learning/"
    },
    {
        "IMG": "https://img-c.udemycdn.com/course/750x422/4975194_1cdd.jpg",
        "id": "9905",
        "courseName": "C++ Tutorial for Complete Beginners",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/free-learn-c-tutorial-beginners/"
    },
    {
        "IMG": " ",
        "id": "9906",
        "courseName": "Intro to Golang",
        "platform": "freecodecampe",
        "courseLink": "https://www.freecodecamp.org/news/what-is-go-programming-language/"
    },
    {
        "IMG": " ",
        "id": "9907",
        "courseName": "Social Media Management",
        "platform": "coursera",
        "courseLink": "https://www.coursera.org/learn/social-media-management"
    },
    {
        "IMG": " ",
        "id": "940",
        "courseName": "Full Stack Development",
        "platform": "upgradcampus",
        "courseLink": "https://upgradcampus.com/full-stack-development-ads-lp/"
    },
    {
        "IMG": " ",
        "id": "5901",
        "courseName": "Rut Tutorial",
        "platform": "Youtub",
        "courseLink": "https://youtu.be/U1EFgCNLDB8"
    },
    {
        "IMG": " ",
        "id": "1010",
        "courseName": "Strivers A2Z DSA Course",
        "platform": "takeuforward",
        "courseLink": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
    },
    {
        "IMG": " ",
        "id": "313",
        "courseName": "Amazon Web Services (AWS) - Zero to Hero",
        "platform": "Udemy",
        "courselink": "https://www.udemy.com/course/amazon-web-services-aws-v/"
    },
    {
        "IMG": " ",
        "id": "888",
        "courseName": "Introduction to Microservices",
        "platform": "Edyoda",
        "courseLink": "https://www.edyoda.com/course/1556?episode_id=3355"
    },
    {
        "IMG": " ",
        "id": "1972",
        "courseName": "PHP",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/topic/php/free/"
    },
    {
        "IMG": " ",
        "id": "9909",
        "courseName": "Data science",
        "platform": "youtube",
        "courseLink": "https://www.youtube.com/playlist?list=PLvMRWNpDTNwQ0wzQYY_lk2sedyzgHaZm3"
    },
    {
        "IMG": " ",
        "id": "5902",
        "courseName": "web Development Course by Apna College",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
    },
    {
        "IMG": " ",
        "id": "9910",
        "courseName": "Java + DSA + Interview Preparation Course",
        "platform": "YouTube",
        "courseLink": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
    },
    {
        "IMG": " ",
        "id": "547",
        "courseName": "Advanced Learning Algorithms",
        "platform": "coursera",
        "courseLink": "https://www.coursera.org/learn/advanced-learning-algorithms/home/week/1"
    },
    {
        "IMG": " ",
        "id": "58",
        "courseName": "web development with Flask",
        "platform": "tutorialspoint",
        "courseLink": "https://www.tutorialspoint.com/flask/index.htm"
    },
    {
        "IMG": " ",
        "id": "19252",
        "courseName": "Computer Science",
        "platform": "Saylor Academy",
        "courseLink": "https://learn.saylor.org/course/index.php?categoryid=9"
    },
    {
        "IMG": "https://img-c.udemycdn.com/course/750x422/3731904_47cc_5.jpg",
        "id": "236",
        "courseName": "Mastering Data Structures & Algorithms using C and C++",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/datastructurescncpp/?src=sac&kw=mastering+data+structure"
    },
    {
        "IMG": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/24/full/20230224104941.jpg",
        "id": "69",
        "courseName": "Basics of c++",
        "platform": "Simply Learn",
        "courseLink": "https://www.simplilearn.com/free-course-to-learn-cpp-basics-skillup"
    },
    {
        "IMG": " ",
        "id": "7000",
        "courseName": "Introduction To Python Programming",
        "platform": "udemy",
        "courseLink": "https://www.udemy.com/share/101r1i/"
    },
    {
        "IMG": " ",
        "id": "7100",
        "courseName": "HTML in web development",
        "platform": "Udemy",
        "courseLink": "https://www.udemy.com/course/html-in-web-development-new/"
    },
    {
        "IMG": " ",
        "id": "59",
        "courseName": "Front End Development Libraries",
        "platform": "free code camp",
        "courseLink": "https://www.freecodecamp.org/learn/front-end-development-libraries/"
    }, {
        "IMG": " ",
        "id": "9",
        "courseName": "The Full Stack Web Development",
        "platform": "Infosys Springboard",
        "courseLink": "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_0130944461471416322737_shared/overview"
    }
];
