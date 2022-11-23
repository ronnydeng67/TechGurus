# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  r = User.create!(
    name: 'ronny', 
    email: 'ronny@gmail.com', 
    password: 'password'
  )

  d = User.create!(
    name: 'Demo',
    email: 'demo@user.com',
    password: 'password'
  )

  d1 = User.create!(
    name: 'Mike',
    email: 'milk@gmail.com',
    password: 'password'
  )

  d2 = User.create!(
    name: 'Sharon'
    email: 'sharon@gmail.com',
    password: 'password'
  )

  d3 = User.create!(
    name: 'Jason'
    email: 'jason@gmail.com',
    password: 'password'
  )

  d4 = User.create!(
    name: 'Garen'
    email: 'garen@gmail.com',
    password: 'password'
  )

  d5 = User.create!(
    name: 'Jenny'
    email: 'jenny@gmail.com',
    password: 'password'
  )

  d6 = User.create!(
    name: 'Lynda'
    email: 'lynda@gmail.com',
    password: 'password'
  )

  c1 = User.create!(
    name: 'Tim'
    email: 'tim@gmail.com',
    password: 'password'
  )

  c2 = User.create!(
    name: 'Kevin'
    email: 'kevin@gmail.com',
    password: 'password'
  )

  c3 = User.create!(
    name: 'Paul'
    email: 'paul@gmail.com',
    password: 'password'
  )

  

  puts "Destroying item tables..."

  Item.destroy_all

  puts "Restting keys"

  ApplicationRecord.connection.reset_pk_sequence!('items')
  
  puts "Creating items..."

  item1 = Item.create(
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    price: '999.99',
    department: 'computer',
    description: 'Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.',
    details: "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance Go longer than ever with up to 18 hours of battery life
    8-core CPU delivers up to 3.5x faster performance to tackle projects faster than ever
    Seven GPU cores with up to 5x faster graphics for graphics-intensive apps and games
    16-core Neural Engine for advanced machine learning
    8GB of unified memory so everything you do is fast and fluid
    Superfast SSD storage launches apps and opens files in an instan"
  )

  # debugger
  file1 = File.open('app/assets/images/macbook.png')
  item1.photo.attach(io: file1, filename: 'macbook.png')


  item2 = Item.create(
    name: 'Apple - iPhone 14 Pro Max 128GB - Space Black (Verizon)',
    price: '799',
    department: 'phone',
    description: 'iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.',
    details: "6.7-inch Super Retina XDR display¹ featuring Always-On and ProMotion
Dynamic Island, a magical new way to interact with iPhone
48MP Main camera for up to 4x greater resolution
Cinematic mode now in 4K Dolby Vision up to 30 fps
Action mode for smooth, steady, handheld videos
Vital safety features—Emergency SOS via satellite and Crash Detection
All-day battery life and up to 29 hours of video playback"
  )

  file2 = File.open('app/assets/images/iphone14.png')
  item2.photo.attach(io: file2, filename: 'iphone14.png')

  item3 = Item.create(
    name: 'Canon - EOS Rebel T7 DSLR Video Camera with 18-55mm Lens - Black',
    price: '479.99',
    department: 'camera',
    description: 'Take professional-looking photos with this Canon DSLR camera bundle. The 24.1-megapixel CMOS sensor captures the smallest details, even in low light, and the optical image stabilizer technology ensures handheld shots are sharp. The 18-55mm lens included in this Canon DSLR camera bundle is suitable for taking wide-angle pictures or zooming in for portraits.',
    details: "EF-S 18-55mm f/3.5-5.6 IS II lens provides versatility
    ISO 100 - 6400, ISO auto
    Capture fast-action shots at up to 3 fps (frames per second)
    9-point autofocus quickly tracks and locks onto your subject
    Capture spectacular movies in full 1080p HD
    Built-in Wi-Fi to instantly share your pictures
    PictBridge compatibility lets you print photos without a PC"
  )

  file3 = File.open('app/assets/images/canon.png')
  item3.photo.attach(io: file3, filename: 'canon.png')

  item4 = Item.create(
    name: 'Apple - AirPods Pro (2nd generation) - White',
    price: '249.99',
    department: 'audio',
    description: 'AirPods Pro feature up to 2x more Active Noise Cancellation,¹ plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.² Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.',
    details: 'Active Noise Cancellation reduces unwanted background noise
    Adaptive Transparency lets outside sounds in while reducing loud environmental noise
    Personalized Spatial Audio with dynamic head tracking places sound all around you
    Multiple ear tips (XS, S, M, L)
    Touch control lets you swipe to adjust volume, press to direct media playback, answer or end calls, and press and hold to switch between listening modes
    Sweat and water resistant for AirPods Pro and charging case⁴
    MagSafe Charging Case with speaker and lanyard loop'
  )

  file4 = File.open('app/assets/images/airpod.png')
  item4.photo.attach(io: file4, filename: 'airpod.png')

  item5 = Item.create(
    name: 'Sony - PlayStation 5 Console',
    price: '549.99',
    department: 'game',
    description: 'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio*, and an all-new generation of incredible PlayStation games. *3D audio via built-in TV speakers or analog/USB stereo headphones. Set up and latest system software update required',
    details: "The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.
    Marvel at incredible graphics and experience new PS5 features.
    Maximize your play sessions with near-instant load times for installed PS5 games.
    With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.
    The PS5 console can play over 4,000 PS4 games. Enjoy faster and smoother frame rates in some of the PS4 console’s greatest games.
    Play your favorite PS5 games on your stunning 4K TV."
  )

  file5 = File.open('app/assets/images/ps5.png')
  item5.photo.attach(io: file5, filename: 'ps5.png')

  item6 = Item.create(
    name: 'Alienware - x15 R2 15.6" FHD Gaming Laptop - 12th Gen Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3070 Ti - 1TB SSD - Lunar Light',
    price: '2699.99',
    department: 'computer',
    description: 'Introducing the new Alienware x15 R2 - our thinnest 15" laptop redefines how a gaming PC should look and feel, with new NVIDIA GeForce RTX graphics, Alienware Cryo-tech, Dolby Atmos and Dolby Vision.',
    details: "Windows 11 has all the power and security of Windows 10 with a redesigned and refreshed look. It also comes with new tools, sounds, and apps. Every detail has been considered.
    1920 x 1080 resolution with native 1080p support to showcase your games and HD movies with impressive color and clarity. Energy-efficient LED backlight.
    Powerful twelve-core, twenty-way processing performance. Intel Turbo Boost Technology delivers dynamic extra power when you need it, while increasing energy efficiency when you don't.
    Reams of high-bandwidth DDR4 RAM to smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs all at once.
    While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
    Backed by 8GB GDDR6 dedicated video memory for a fast, advanced GPU to fuel your games.
    An industry-first design uses four intelligently controlled and programmable fans to dissipate heat."
  )

  file6 = File.open('app/assets/images/alien.png')
  item6.photo.attach(io: file6, filename: 'alien.png')

  item7 = Item.create(
    name: 'GoPro - HERO9 Black 5K and 20 MP Streaming Action Camera - Black',
    price: '349.99',
    department: 'camera',
    description: 'Record captivating vlogs and take brilliant photos with this black GoPro HERO9 camera. The high-quality CMOS sensor captures 5K video and up to 20.0MP images for stunning clarity, and support for a microSD card offers customizable storage space. This water-resistant GoPro HERO9 camera allows for use at the beach or pool.',
    details: "Shoot stunning video with up to 5K resolution, perfect for maintaining serious detail even when zooming in. Packing a new 23.6MP sensor that’s an absolute powerhouse, HERO9 Black brings lifelike image sharpness, fluid motion and in-camera horizon leveling that always impresses.
    Capture crisp, pro-quality photos with 20MP clarity. And with SuperPhoto, HERO9 Black can automatically pick all the best image processing for you, so it’s super easy to nail the shot.
    No more carrying a separate frame. Just flip out the folding fingers, attach your camera to any mount and go.
    A new, larger rear touch screen with touch zoom on HERO9 Black should feel instantly familiar and a dazzling new front display makes for easy framing and intuitive camera control.
    While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.
    Experience ultimate smoothness with our most advanced video stabilization ever. HyperSmooth 3.0 enables in-camera horizon leveling and boost in all settings.
    In-camera horizon leveling (up to 45% tilt) is now possible with the new Linear + Horizon Leveling digital lens-helping your footage stay stable and straight."
  )

  file7 = File.open('app/assets/images/gopro.png')
  item7.photo.attach(io: file7, filename: 'gopro.png')

  item8 = Item.create(
    name: 'Samsung - Galaxy S22 Ultra 128GB (Unlocked) - Phantom Black',
    price: '1199.99',
    department: 'phone',
    description: 'The power of our fastest chip ever, long lasting battery, and sophisticated AI enables revolutionary night-time video that’s as clear-as-day. And, for the first time, S Pen with its increased super-powers has been embedded in Galaxy S22 Ultra’s beautifully sleek design. Today, Galaxy S22 Ultra sets an epic standard of smartphone experience.',
    details: "Shoot videos that rival how epic your life is with stunning 8K recording.
    Video you capture is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.
    Capture the night with crystal-clear, bright pics and videos, no matter the lighting with Night Mode.
    Put all your favorite details on display. Portrait Mode auto- detects and adjusts to what you want front and center, making all your photos worthy of a frame.
    Capture premium detail with 108MP resolution — the highest available on a smartphone.
    Your favorite content will look even more epic on our brightest display ever with Vision Booster.
    Power every scroll, click, tap and stream all day long and then some with an intelligent, long-lasting battery."
  )

  file8 = File.open('app/assets/images/samsung.png')
  item8.photo.attach(io: file8, filename: 'samsung.png')

  item9 = Item.create(
    name: 'Bose - QuietComfort Earbuds II True Wireless Noise Cancelling In-Ear Headphones - Triple Black',
    price: '299.99',
    department: 'audio',
    description: 'Experience customized audio and acclaimed noise cancellation with Bose QuietComfort Earbuds II True Wireless Noise Cancelling In-Ear Headphones, featuring pioneering CustomTune sound calibration technology that intelligently personalizes the noise cancellation and sound performance to your ears. ',
    details: "Bose QuietComfort Earbuds II Active Noise Cancelling Headphones contain powerful microphones that detect environmental noise and generate an opposing signal to cancel it, allowing you to tune out distractions and focus on crushing your goals.
    With high-performance drivers, amps and electronics that are engineered to fit a small package.
    Capture the night with crystal-clear, bright pics and videos, no matter the lighting with Night Mode.
    Stay absorbed in the music you love for up to 6 hours on a single charge.
    You’re in control of your sound. Easily switch between Quiet Mode for maximum noise cancellation and Aware Mode with ActiveSense technology.
    Take your earphones with you wherever you go. Bose QuietComfort Earbuds II Bluetooth Wireless Earbuds have an IPX4 environmental rating for sweat and water resistance.
    Each earbud contains two noise-rejecting microphones that focus on the sound of your voice and filter out ambient noise and wind."
  )

  file9 = File.open('app/assets/images/bose.png')
  item9.photo.attach(io: file9, filename: 'bose.png')


  item10 = Item.create(
    name: 'Microsoft - Xbox Series S 512 GB All-Digital Console (Disc-Free Gaming) - White',
    price: '299.99',
    department: 'game',
    description: 'Go all-digital with Xbox Series S and enjoy next-gen performance in the smallest Xbox ever, at a great price. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture.',
    details: "Go all digital with Xbox Series S and enjoy next-gen gaming at a great price.
    Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture.
    Stream 4K video on Disney+, Netflix, Amazon, Hulu, Microsoft Movies & TV, and more.
    Enjoy digital games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever.
    With Xbox Game Pass Ultimate, enjoy new games on day one like Forza Horizon 5 from Xbox Game Studios, as well as iconic franchises like DOOM from Bethesda Softworks, indie games, and blockbusters.
    Use most of your Xbox One accessories—including controllers, headsets, and more—on Xbox Series S.
    Experience the modernized Xbox Wireless Controller, designed for enhanced comfort during gameplay. Stay on target with textured grip and seamlessly capture and share content."
  )

  file10 = File.open('app/assets/images/xbox.png')
  item10.photo.attach(io: file10, filename: 'xbox.png')


  item11 = Item.create(
    name: 'HP OMEN - 25L Gaming Desktop - AMD Ryzen 5 5600G - HyperX 8GB Memory - NVIDIA GeForce GTX 1660 SUPER - 512GB SSD - Ceramic White',
    price: '899.99',
    department: 'computer',
    description: 'Get ready to play: The OMEN 25L Desktop PC lives for adventure, never leaves a teammate behind, and can pack a new 120mm front fan. Meet your new best friend, packing an AMD Ryzen™ processor and a NVIDIA® GeForce® GTX graphics card.',
    details: "Operating system: Windows 11 Home
    Processor: AMD Ryzen™ 5 5600G Processor
    Memory: HyperX® 8 GB DDR4-3200 XMP RGB Heatsink RAM (1x8 GB)
    Graphics: NVIDIA® GeForce® GTX 1660 SUPER™ graphics card with 6 GB GDDR6 dedicated memory
    Internal Storage: 512 GB PCIe® NVMe™ M.2 Solid State Drive
    Wireless: Wi-Fi 6 (2x2) and Bluetooth® Combo (Supporting Gigabit data rate), MU-MIMO supported
    DTS: X Ultra Technology"
  )
  file11 = File.open('app/assets/images/hp_pc.png')
  item11.photo.attach(io: file11, filename: 'hp_pc.png')
  

  item12 = Item.create(
      name: 'iBUYPOWER SlateMR Gaming Desktop - Intel i5-12400F - 8GB DDR4 Memory - NVIDIA GeForce RTX 3050 8GB - 500GB NVMe SSD - Black',
      price: '979.99',
      department: 'computer',
      description: '
      Upgrade your current gaming rig with this iBUYPOWER Desktop. It’s 8GB of RAM and Intel i5-12400F processor lets you run multiple programs at once, and its NVIDIA RTX 3050 graphics card renders fast-paced action smoothly without screen tearing. This iBUYPOWER desktop also has a 500GB NVME solid state drive for a faster start up and data acesss.',
      details: "Windows 11 Operating System
      Intel i5-12400F processor
      8GB system memory for advanced multitasking
      500GB NVMe solid state drive (SSD) of storage space and speed
      NVIDIA GeForce RTX 3050 graphics
      Wired network connectivity
      Multidisplay capability"
    )
    file12 = File.open('app/assets/images/ibuy.png')
    item12.photo.attach(io: file12, filename: 'ibuy.png')

    item13 = Item.create(
      name: 'Lenovo - IdeaPad Duet Chromebook - 10.1” (1920x1200) Touch 2-in-1 Tablet - MediaTek P60T - 4G RAM - 128G eMCP4x - with Keyboard - Ice Blue + Iron Gray',
      price: '299',
      department: 'computer',
      description: 'Work on pending assignments while on the move with this Lenovo Chromebook Duet. The 10.1-inch touch screen provides an interactive user experience, while the 128GB of internal storage offer ample space for apps and media files. This Lenovo Chromebook Duet features a MediaTek Helio P60T processor and 4GB of RAM for effortless multitasking.',
      details: "Work, play, and connect right out of the box with Google+, Search, Gmail, YouTube, and Hangouts. Save files in the cloud with Google Drive, and join gamers around the world with the Play Games app.
      Chromebook is a device for the way the modern world works, with thousands of apps, built-in virus protection, and cloud backups. It is secure, fast, up-to-date, versatile, and simple.
      This high-resolution screen is ideal for web browsing, studying, reading, and streaming HD content.
      Plenty of onboard storage for photos, videos, documents and more. Plus, 100GB of one-year free trial of Google One to keep your documents, files, and photos free and secured.
      The right combination of fast performance and power efficiency. It allows rapid multitasking, delivers smooth response, and boasts amazing graphics.
      2.0MP fixed-focus front-facing camera with LED indicator and 8.0MP autofocus rear-facing camera."
    )
    file13 = File.open('app/assets/images/lenovo.png')
    item13.photo.attach(io: file12, filename: 'lenovo.png')
    
    item14 = Item.create(
      name: 'Sony - Handycam CX405 Flash Memory Camcorder - Black',
      price: '229.99',
      department: 'camera',
      description: 'Utilizing Optical SteadyShot image stabilization, a BIONZ X image processor and an Exmor R CMOS sensor, this Sony Handycam HDRCX405/B camcorder enables you to capture video footage with 1920 x 1080 resolution and sharp still images.',
      details: "Brings subjects and scenes into clear view.
      With 230,000 pixels makes it easy to set up and review shots and video footage.
      With RGB primary color filters and approximately 2510K pixels lets you capture sharp footage.
      Helps ensure high-quality capture.
      Helps prevent the occurrence of camera shake and vibration.
      Lets you capture movie footage with 1920 x 1080 60p resolution.
      Include Dolby Digital 2-channel stereo, Dolby Digital Stereo Creator, MPEG-4, AAC-LC 2-channel, MPEG-4 and linear PCM 2-channel (48kHz/16-bit) for clear sound."
    )
    file14 = File.open('app/assets/images/sony_cam.png')
    item14.photo.attach(io: file14, filename: 'sony_cam.png')
    
      item15 = Item.create(
      name: 'Vantop - Snaptain SP7100 Drone with Remote Controller - Gray',
      price: '299.99',
      department: 'camera',
      description: 'Our most advanced drone , features a 4K camera, advanced flight modes like waypoints , point of interest , follow me and gesture control with an impressive fight time of 26 mins .',
      details: "The professional 4K UHD camera enables capturing clear images from different angles by adjusting camera lens up and down. Upgraded 5G Wi-Fi transmission guarantees the fluency of real-time images through APP.
      With GPS positioning, the drone will automatically fly back to starting points when you lose signal, battery is low or if you press Return to Home. Even if the GPS signal is weak, the drone will automatically switch to Altitude Mode to keep the drone in your sight.
      The intelligent SP7100 is equipped with an advanced flight mode, such as points of interest, waypoints, gesture for photos/videos. Plan a flying route as you like or record wonderful moments by giving a gesture. Free your hands and start your adventure whenever and wherever.
      Optical Flow Positioning gives you more precise position and more stable flight even on windy day.Functions like one key start/stop, headless mode, emergency stop, altitude hold, allows beginners to get started quickly.
      Foldable remote and drone makes outdoor flying more convenient. The drone will automatically turn off if no operation within 10 minutes. The control range of 2.4GHz transmitter up to 2600 feet range and the powerful battery works 26 minutes for each charge."
    )
    file15 = File.open('app/assets/images/drone.png')
    item15.photo.attach(io: file15, filename: 'drone.png')

    item16 = Item.create(
      name: 'Panasonic - LUMIX G7 Mirrorless 4K Photo Digital Camera Body with 14-42mm f3.5-5.6 II Lens - DMC-G7KK - Black',
      price: '699.99',
      department: 'camera',
      description: 'Panasonic LUMIX G7 Mirrorless 4K Photo Digital Camera Body with 14-42mm f3.5-5.6 II Lens: Shooting pictures on vacation, creating portraits and capturing special moments is easy thanks to a 16.0-megapixel Live MOS sensor and the included 14-42mm lens with optical image stabilization.',
      details: "Capture detailed images in a variety of shooting scenarios. Image stabilization promotes smooth footage and clear photos.
      Create high-resolution images with up to 4592 x 3448 pixels. Primary color filter produces lifelike hues, and a supersonic wave filter helps keep the sensor free of dust.
      Wide range enables crisp image capture in low lighting conditions.
      The camera continuously captures images, so you can photograph sporting events and other fast-moving action.
      Large, clear rear monitor offers a wide viewing angle, 1040K dots resolution and approximately 100% coverage to help you frame and review shots.
      High-definition video mode records arresting footage with up to 3840 x 2160 resolution. Also supports 1920 x 1080, 1280 x 720 and 640 x 480 resolutions for flexible shooting options.
      Approximately 1.4x magnification and 100% field of view for crisp details and a broad coverage area.
      Auto, forced on and off and slow sync modes help you create optimal lighting conditions, and red-eye reduction reproduces natural-looking eyes in portraits."
    )
    file16 = File.open('app/assets/images/panasonic.png')
    item16.photo.attach(io: file16, filename: 'panasonic.png')


    item17 = Item.create(
      name: 'Google - Pixel 7 Pro 128GB - Snow',
      price: '899.99',
      department: 'phone',
      description: 'Introducing Pixel 7 Pro, Google’s best-of-everything phone. Powered by Google Tensor G2, it’s fast and secure, with an immersive display and amazing battery life. The best Pixel camera yet includes a telephoto lens and pro-level features like Macro Focus. And with the certified Titan M2 security chip and a built-in VPN, Pixel helps protect your personal data.',
      details: "Google Tensor G2 makes Pixel 7 Pro faster, more efficient, and more secure.₂ And it delivers even more helpful features and the best photo and video quality yet on Pixel.
      The Pixel 7 Pro triple rear camera system includes a 5x telephoto lens. The upgraded ultrawide lens with autofocus now powers Macro Focus.
      The Pixel 7 Pro 6.7-inch Smooth Display makes everything stunning and immersive. It intelligently adjusts up to 120Hz for smoother, more responsive performance.
      With Live Translate, you can interpret face-to-face conversations in 48 languages, chat in real time, and translate menus with your camera.
      Google Pixel 7 Pro runs on the Android operating system.
      With Google Tensor G2 and the Titan M2 security chip, Pixel is built with multiple layers of security to help keep your personal info safe.
      Pixel’s Adaptive Battery can last over 24 hours. Turn on Extreme Battery Saver, and the battery can last up to 72 hours.₅ And your Pixel charges super fast.
      The Pixel 7 Camera records video with brighter, more vibrant colors and higher contrast.₁ It makes landscapes more epic and moments more dramatic."
    )
    file17 = File.open('app/assets/images/pixel.png')
    item17.photo.attach(io: file17, filename: 'pixel.png')

    item18 = Item.create(
      name: 'OnePlus - 10T 5G 16GB+256GB - Moonstone Black',
      price: '749.99',
      department: 'phone',
      description: 'The OnePlus 10T 5G is a designed for maximum speed & performance. The powerful Snapdragon 8+ Gen 1 Mobile platform, coupled with up to 16 GB of RAM, makes the 10T perfect for multitaskers and power users. Equipped with the most advanced thermal management system on any OnePlus device, the 10T is also an ideal choice for gaming. HyperBoost Gaming Engine gives a competitive edge with improved graphics & power optimization. Witness the next era of charging with 125W SuperVOOC, delivering a day’s power in 10 minutes and nearly double the battery lifespan. Capture Ever Moment with the 10T’s versatile triple camera, Nightscape 2.0, ICE 2.0, and Super HDR.',
      details: "Optimize your entire gaming experience with HyperBoost on the OnePlus 10T 5G. Experience smoother gameplay with GPA Frame Stabilizer, lower power consumption with GPU Load Control, & reduced touch latency (up to 10ms) with LSTouch.
      The 10T is equipped with the fastest Snapdragon mobile platform ever – the 8+ Gen 1 – delivering 10% higher CPU performance and 30% lower CPU power usage.
      The 10T has the largest cooling system of any OnePlus phone, nearly 10% larger than the 10 Pro. The increased thermal efficiency from the redesigned heat dissipation channel makes the 10T perfect for power users & mobile gaming enthusiasts.
      The 10T comes with a powerful 125W SuperVOOC charger, delivering a full day’s power in 10 minutes and double the battery lifespan (from 800 to 1600 cycles).
      The OnePlus 10T has a versatile triple camera system. The 10T camera has improved low-light performance with Nightscape 2.0, faster image processing with Image Clarity Engine 2.0, & more evenly lit portraits with Super HDR."
    )
    file18 = File.open('app/assets/images/oneplus.png')
    item18.photo.attach(io: file18, filename: 'oneplus.png')

    item19 = Item.create(
      name: 'Apple - iPhone 14 Pro 1TB - Deep Purple',
      price: '1499.99',
      department: 'phone',
      description: 'iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.',
      details: "6.1-inch Super Retina XDR display featuring Always-On and ProMotion
      Dynamic Island, a magical new way to interact with iPhone
      48MP Main camera for up to 4x greater resolution
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      Vital safety features—Emergency SOS via satellite² and Crash Detection
      All-day battery life and up to 23 hours of video playback
      A16 Bionic, the ultimate smartphone chip. Superfast 5G cellular"
    )
    file19 = File.open('app/assets/images/14pro.png')
    item19.photo.attach(io: file19, filename: '14pro.png')

  item20 = Item.create(
      name: 'Bose - SoundLink Color Portable Bluetooth Speaker II - Soft Black',
      price: '129.99',
      department: 'audio',
      description: 'The SoundLink Color Portable Bluetooth speaker II was engineered to deliver bold sound wherever life takes you. From the pool to the park to the patio, its rugged, water-resistant design lets you enjoy the music you love in more places. Voice prompts make Bluetooth pairing easy. And up to 8 hours of listening per battery charge lets you keep your playlists playing.',
      details: "Built-in speakerphone for clear conference or personal calls and access to your phone's Siri or your Google Assistant.
      Pair two speakers together for Stereo or Party Mode playback.
      With Bose SimpleSync technology, listen to the same music in different rooms by grouping a Bose Home Speaker with a Bose SoundLink Bluetooth speaker and play them both in perfect sync.
      Compatible Bose Smart Home speakers are Home Speaker 500, Home Speaker 300, and Portable Home Speaker. Compatible Bose Soundlink speakers are Soundlink Revolve, Revolve+, Mini, Mini II, Color, Color II, and Micro.
      Play your favorite tunes for up to 8 hours on a full charge.
      For clean and powerfull sound.
      Wherever you're headed, SoundLink Micro is designed to tag along with a silicone rubber exterior, tear-resistant strap and IPX7 waterproof rating allows it to survive a fall into the pool or ocean. There's no need to panic if you drop it.
      NFC pairing for easy connection."
    )
    file20 = File.open('app/assets/images/bose_speaker.png')
    item20.photo.attach(io: file20, filename: 'bose_speaker.png')

    item21 = Item.create(
      name: 'Polk Audio - 5.1-Channel MagniFi Max SR Soundbar with Wireless Subwoofer & Surround Speakers (Pair) - Black',
      price: '599.99',
      department: 'audio',
      description: 'Polk MagniFi Max SR high-performance home theater sound bar with 8” Ported Wireless Subwoofer and Surround Speakers provide more dynamic and lifelike sound than traditional sound bars, and is optimized to make movies, TV, video games and music come to life.',
      details: "Packed inside this slim and sleek sound bar are 7 powerful drivers and tweeters that produce exceptionally clear sound, far superior than any traditional sound bar
      The subwoofer is equipped with an 8” downward firing driver and the wall-mountable surround speakers, each have a 3' full range driver. The sub and the speakers can be instantly connected to the soundbar the moment they are powered on
      Enjoy a room-filling audio equivalent to what you may experience in a concert or theater with Polk’s patented SDA Technology that creates an expansive surround stage & detailed stereo imaging
      INDEPENDENTLY CONTROL VOICE LEVELS by maximizing sound clarity & minimizing voice delays and muzzled sounds. Hear every word clearly and make your movie, sports and music experience exquisite with individual modes for different content types
      Connect a wide range of devices via the 3 HDMI Inputs (all HDCP 2.2 compliant), 1 HDMI-ARC output, including Blu-Ray players & set-top box via the Optical port, or non-digital device using the Aux Analog input (3.5mm), plus Bluetooth, USB and Internet connectivity
      Cast your favorite music and video tracks to the sound bar and enjoy unlimited playback using streaming services like Pandora, Spotify and others from your smartphone, tablet or other compatible Android devices for a multi room system"
    )
    file21 = File.open('app/assets/images/polk.png')
    item21.photo.attach(io: file21, filename: 'polk.png')

    item22 = Item.create(
      name: 'Logitech - Z906 5.1-Channel Satellite Surround Sound Speaker System (6-Piece) - Black',
      price: '399.99',
      department: 'audio',
      description: 'Logitech Surround Sound Speakers Z906-hear every detail, all around you, in theater-quality sound. 500 watts (RMS) of thunderous audio turns any night into opening night. THX Certification gives you quality you can count on, while onboard 5.1 digital decoding immerses you in your favorite movies as you hear every detail of Dolby Digital or DTSTM encoded soundtracks in surround sound-from the roar of the crowd to the footsteps right behind you.',
      details: "500 watts (RMS) of power let you make any night opening night and deliver thunderous audio that can shake your house-and your whole neighborhood.
      These speakers have met strict performance standards to achieve THX certification - so you can be sure that your entertainment will sound the way it was meant to sound.
      Digital decoding enables detailed surround sound - from the roar of the crowd to the footsteps right behind you-in your Dolby digital or DTSTM encoded soundtracks.
      Add up to six components simultaneously and set up your system the way you want to. Connect your TV, Blu-ray/DVD player, DVR, Xbox 360, PlayStation 3, Wii, iPod, stereo and more.
      You're in command with the control console and wireless remote-select inputs and adjust surround sound and volume levels to customize your listening experience.
      Certified carbon neutral: the carbon impact of the product and packaging has been reduced to zero.
      "
    )
    file22 = File.open('app/assets/images/logitech.png')
    item22.photo.attach(io: file22, filename: 'logitech.png')

    item23 = Item.create(
      name: 'Nintendo - Switch 32GB Console - Neon Red/Neon Blue Joy-Con',
      price: '299.99',
      department: 'game',
      description: '
      Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.PLAY ANYWHEREAt home the system rests in the Nintendo Switch dock, which lets you play with family and friends on a TV in the comfort of your living room.',
      details: "Includes a Switch console, Switch dock, Joy-Con (L) and Joy-Con (R), Joy-Con grip, AC adapter, HDMI cable, and two Joy-Con strap accessories
      Enjoy an amazing gaming experience with the Nintendo Switch console that travels with you
      Place the system in the Nintendo Switch dock, which allows you to play with your family and friends on a TV in the comfort of your living room
      Powered by the custom NVIDIA Tegra processor to deliver quality graphics performance
      The parental controls let adults manage the system's content
      Supports amiibo accessories to provide fun in-game extras in compatible games
      Become immersed in bright, high-definition gameplay, with 6.2' multitouch display featuring 1280 x 720 resolution
      Wireless connectivity for multiplayer and co-op play"
    )
    file23 = File.open('app/assets/images/switch.png')
    item23.photo.attach(io: file23, filename: 'switch.png')

    item24 = Item.create(
      name: 'Mario + Rabbids Sparks of Hope Cosmic Edition - Nintendo Switch, Nintendo Switch (OLED Model), Nintendo Switch Lite',
      price: '59.99',
      department: 'game',
      description: '
      The Gold Edition of the game includes: The base game and the season pass which contains upcoming DLC packs, including additional story content featuring a new character, quests, and battles. Also includes the Galactic Prestige Collection, with three exclusive and supremely stylish weapon skins for your team, unlockable right away. Save the galaxy, but do it with pizzazz!',
      details: "Team up with Mario, Luigi, Princess Peach, Rabbid Peach, Rabbid Luigi, and their friends on a galactic journey to defeat a malevolent entity and save your Spark companions. Explore planets throughout the galaxy as you uncover mysterious secrets and compelling quests!
      Build your dream team with three heroes from an eclectic roster of nine.
      Take down all new bosses, along with some familiar enemies throughout the galaxy.
      Rescue the adorable Sparks throughout the galaxy, who provide distinct powers that will help you in battle.
      Unleash your heroes' skills but be strategic as you dash your enemies, team jump on your allies, and hide behind covers.
      The Megabug is back, but this time as a set of 9 weapon skins! Preorder the game to fully embrace your dark side and change the look of your weapons in-game. Included in this tribute cosmetic pack are options for all members of your party. Now, go out and save the galaxy!
      Offer subject to change. Internet connection and Nintendo account required. May be available for purchase and/or as giveaway(s) separately at Ubisoft’s discretion at any time."
    )
    file24 = File.open('app/assets/images/mario.png')
    item24.photo.attach(io: file24, filename: 'mario.png')

    item25 = Item.create(
      name: 'God of War Ragnarök Launch Edition - PlayStation 5',
      price: '69.99',
      department: 'game',
      description: 'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they’ve been trying their utmost to undo the end times. But despite their best efforts, Fimbulwinter presses onward. Witness the changing dynamic of the father-son relationship as they fight for survival; Atreus thirsts for knowledge to help him understand the prophecy of “Loki”, as Kratos struggles to break free of his past and be the father his son needs. See for yourself how fate will force a choice upon them: between their own safety or the safety of the realms. All the while, hostile Asgardian forces assemble… Venture through all Nine Realms towards the prophesied battle that will end the world. Vanquish Norse gods and monsters alike in fluid, expressive combat. Explore in wonder through stunning mythological landscapes.',
      details: "Atreus hungers for knowledge to help him understand the prophecy of “Loki” and the role he is to play in Ragnarök. Kratos must decide whether he will be chained by the fear of repeating his mistakes or break free of his past to be the father Atreus needs.
      The Leviathan Axe, Blades of Chaos, and Guardian Shield return alongside a host of new abilities for both Kratos and Atreus. As they take on foes throughout the Nine Realms, Kratos’ deadly skills will be tested like never before as he fights to protect his family.
      Journey to dangerous and stunning landscapes while facing a wide variety of enemy creatures, monsters, and Norse gods as Kratos and Atreus search for answers and allies. Venture through all Nine Realms towards the prophesied battle that will end the world.
      Feel your journey through the Norse realms, made possible by immersive haptic feedback and adaptive trigger functionality. Take advantage of multidirectional 3D Audio; hear enemies approaching from any direction.¹
      Bask in the beautiful worlds you travel through, brought to life by precise art direction and arresting attention to detail. Switch between full 4K resolution at a targeted 30 frames per second, or dynamic resolution upscaled to 4K at a targeted 60fps.²
      3D audio with stereo headphones (analog or USB) ²4K resolution requires a compatible 4K TV or display."
    )
    file25 = File.open('app/assets/images/godofwar.png')
    item25.photo.attach(io: file25, filename: 'godofwar.png')

    item26 = Item.create(
      name: 'NBA 2K23 Standard Edition - Xbox Series X',
      price: '69.99',
      department: 'game',
      description: 'Pre-order to receive Best Buy-Exclusive Bonus Digital Content: 2,000 Virtual Currency, 95-Rated Nikola Jokić MyTEAM Free Agent Card, and a New Era Hat for MyCAREER. Rise to the occasion and realize your full potential in NBA 2K23. Prove yourself against the best players in the world and showcase your talent in MyCAREER. Pair today’s All-Stars with timeless legends in MyTEAM. Build a dynasty of your own in MyGM or take the NBA in a new direction with MyLEAGUE. Take on NBA or WNBA teams in PLAY NOW and experience true-to-life gameplay. How will you Answer the Call?',
      details: "The next evolution of ultra-real gameplay has arrived on New Gen with NBA 2K23. New ways to attack off the dribble and at the rim are matched against an intuitive 1-on-1 positional shading system to unlock even more control in the most authentic basketball experience yet.
      The City is yours for the taking in the most immersive MyCAREER journey to date. Hone your game, build your brand, and decide how you write your story on and off the court. Choose your crew and take on the best MyPLAYERs inside an all-new City ready for you to call next.
      Step back in time with era-specific visuals that captured Michael Jordan’s ascension from collegiate sensation to global icon with immersive Jordan Challenges chronicling his career-defining dominance.
      Ball without limits as you collect and assemble a bevy of legendary talent from any era in MyTEAM. Dominate the hardwood each Season, and bring your vision to life with a broad set of customization tools to create the perfect look for your perfect starting five."
    )
    file26 = File.open('app/assets/images/2k.png')
    item26.photo.attach(io: file26, filename: '2k.png')

    item00 = Item.create(
      name: 'TechGurus TotalTech Yearly Membership',
      price: '199.99',
      department: 'special',
      description: 'TechGurus Totaltech is the membership you and your tech deserve: around-the-clock tech support, up to 24 months of product protection with active membership, free delivery and standard installation, plus so much more. A plan you need to protect the tech you love.',
      details: "Get unlimited tech support on all the technology in your home, no matter where you bought it. We’re always ready to help you in store, over the phone and 24/7 online.
      From TV mounting to installing a smart video doorbell, there’s a huge list of in-home installations that we’ll do for free when you purchase your product from Best Buy. You’ll also get free delivery on your TechGurus purchases.
      Get expert advice, product recommendations, appointment support and much more. Connect with us through a dedicated Totaltech support line, available 24/7/365.
      Enjoy member-only prices on select products and services.
      You’ll also get free same-day delivery whenever available. No minimum purchase required.
      Enjoy an extended 60-day return and exchange window on most products.
      Save 20% on labor for repairs and advanced services, and 10% on labor for custom installations."
    )
    file00 = File.open('app/assets/images/totaltech.png')
    item00.photo.attach(io: file00, filename: 'totaltech.png')

    item27 = Item.create(
      name: 'Dell - Inspiron 3511 15.6" Touch Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black',
      price: '379.99',
      department: 'computer',
      description: 'The Inspiron laptop is designed with you and the environment in mind, using recycled plastics. Plus, it’s ENERGY STAR 8.0 certified and built with an ergonomic lift hinge design to keep you comfortably connected all day. The Inspiron 15 3000 is expertly designed to keep you connected, powered by the latest processors.',
      details: "Windows 11 Home (S mode)
      15.6 inch Full HD touch screen for hands-on control
      256GB M.2 PCIe NVMe Solid State Drive
      8GB system memory for advanced multitasking
      11th Generation Intel® Core™ i5-1135G7
      Built-in HD webcam
      Easy Everyday Use
      Built-in media reader for simple photo transfer"
    )
    file27 = File.open('app/assets/images/dell.png')
    item27.photo.attach(io: file27, filename: 'dell.png')

    item28 = Item.create(
      name: 'HP - Victus 15.6" Gaming Laptop - Intel Core i5-12450H - 8GB Memory - NVIDIA GeForce GTX 1650 - 512GB SSD - Mica Silver',
      price: '479.99',
      department: 'computer',
      description: 'You will need this much power: Peak PC gaming is upon us and the compact Victus 15 is packed with the power of a desktop to keep up with the biggest games and the best players. Power up and feel your game elevate to where you want to be. Introducing the most refined design in the game: From its iconic color to its spritely designed 15 inch package, this picture of sophistication is a fashion statement rarely realized in the gaming space. This will be all you need to pack. Lets go. The updated thermal design keeps everything chill from max power gaming to after-hours streaming. Open up your game with a full gaming keyboard with the OMEN Gaming Hub key and a much bigger touchpad. The HD Camera features Temporal Noise Reduction for that crisp clarity on your streams or calls.',
      details: "Operating system: Windows 11 Home
      Display: 15.6-inch diagonal, FHD (1920 x 1080), 144 Hz, 9 ms response time, IPS, micro-edge, antiglare
      Processor: 12th Generation Intel Core i5-12450H
      Memory: 8 GB DDR4-3200 MHz RAM (1 X 8 GB)
      Internal storage: 512 GB PCIe NVMe M.2 SSD
      Graphics: NVIDIA GeForce GTX 1650 (4 GB GDDR5 dedicated)
      Wireless: Wi-Fi 6 (2x2) and Bluetooth combo (Supporting Gigabit data rate)
      Sound: Audio by Bang & Olufsen with dual speakers"
    )
    file28 = File.open('app/assets/images/hp-laptop.png')
    item28.photo.attach(io: file28, filename: 'hp-laptop.png')

    item29 = Item.create(
      name: 'Lenovo - IdeaCentre AIO 5i 27" Touch-Screen All-In-One - Intel Core i5 - 12GB Memory - 512GB Solid State Drive - Mineral Grey',
      price: '949.99',
      department: 'computer',
      description: '
      Inspired by the great outdoors, the eye-catching Lenovo IdeaCentre AIO 5i takes its cue from the mighty Cypress tree. Perfectly balanced and durable without sacrificing an ounce of performance with 10th generation Intel Core i5 processor, this all-in-one PC represents an appealing addition to any home.',
      details: "Windows 11 Home
      All-in-one design saves space and cuts clutter
      27' Quad HD multitouch screen
      Xxx Gen Intel® Core™ i5-10400T processor
      12GB system memory for full-power multitasking
      512GB solid state drive (SSD)
      Built-in 1080P IR webcam with stereo microphone
      Built-in media reader for simple photo transfer"
    )
    file29 = File.open('app/assets/images/all-in-one.png')
    item29.photo.attach(io: file29, filename: 'all-in-one.png')

    item30 = Item.create(
      name: 'Canon - EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm Lens Content Creator Kit - Black',
      price: '899.99',
      department: 'camera',
      description: 'Get the clarity and convenience you need to show off all your content with the EOS M50 Mark II Content Creator Kit. The EOS M50 Mark II camera provides you with a high-performance and portable camera so you can use it practically anywhere and get the quality, high-resolution 4K or Full HD results to make you and your subjects look great.',
      details: "EF-M 15-45mm f/3.5-6.3 IS STM zoom lens provides versatility
      24.1 Megapixel CMOS Sensor
      ISO up to 25600 (expandable to 51,200)
      Never miss a shot with ultrafast 10 fps (frames per second)
      Improved Dual Pixel CMOS AF and Eye Detection AF (Still/Movie Servo AF support)
      4K UHD* 24p Videos
      Built-in Wi-Fi^ Technology
      Built-in Bluetooth®^^ Capability"
    )
    file31 = File.open('app/assets/images/eos-m50.png')
    item31.photo.attach(io: file31, filename: 'eos-m50.png')

    item32 = Item.create(
      name: 'Sony - ZV-1 20.1-Megapixel Digital Camera for Content Creators and Vloggers - Black',
      price: '749.99',
      department: 'camera',
      description: 'Create outstanding content for your viewers with this Sony compact 4K digital camera. The 20-megapixel sensor captures detailed pictures and videos, while Wi-Fi functionality enables easy photo sharing across networks. This Sony compact 4K digital camera features image stabilization for clear shots while walking, and automatic exposure tracks and illuminates faces for consistency in various lighting conditions.',
      details: "1.0-type Exmor RS CMOS sensor
      2.7x optical/44x digital zoom
      High-resolution 4K HDR (HLG) recording
      BIONZ X image processing engine
      Advanced image stabilization
      Full range of scene modes
      Blackout-free shooting
      Auto, custom, and preset white balance controls
      Built-in Wi-Fi"
    )
    file32 = File.open('app/assets/images/zv-1.png')
    item32.photo.attach(io: file32, filename: 'zv-1.png')

    item33 = Item.create(
      name: 'Panasonic - HC-VX870K 4K Ultra HD Flash Memory Camcorder - Black',
      price: '929.99'
      department: 'camera',
      description: 'Preserve important moments with this Panasonic HC-VX870K camcorder, which features a BSI MOS sensor that captures stunning footage with up to 4K Ultra HD (3840 x 2160) resolution and clear stereo sound. Hybrid image stabilization ensures smooth videos.',
      details: "20x optical/60x digital zoom
      4K Ultra HD recording
      1/2.3 BSI MOS sensor
      4.08-81.6mm Leica Dicomar lens
      Hybrid O.I.S. (optical image stabilization)
      Low-light and night-vision recording
      Digital still photo mode
      Stereo microphone"
    )
    file33 = File.open('app/assets/images/870k.png')
    item33.photo.attach(io: file33, filename: '870k.png')

    item34 = Item.create(
      name: 'Motorola - Moto G Pure 32GB Memory (Unlocked) - Deep Indigo',
      price: '159.99',
      department: 'phone',
      description: 'Meet Moto G Pure and get more of what you love. An ultra-wide view of your favorite movies, games, and video chats on a 6.5" Max Vision HD+ display. Plus, a two-day battery to keep the fun going all weekend long. And there’s more. Dual camera system with Night Vision. Super-responsive processor (3GB RAM). Water-repellent design. With Moto G Pure, more comes standard.',
      details: "MediaTek Helio G25 processor
      Universal Unlocked
      13MP Dual Camera System
      6.5 inch Max Vision HD+ display
      Two-day battery
      Water-repellent design
      Fingerprint reader
      Android™ 11"
    )
    file34 = File.open('app/assets/images/moto-g.png')
    item34.photo.attach(io: file34, filename: 'moto-g.png')

    item35 = Item.create(
      name: 'Samsung - Galaxy S22+ 128GB (Unlocked) - Phantom Black',
      price: '999.99',
      department: 'phone',
      description: 'Galaxy S22+ is redefining the epic standard – both for what a smartphone can do with video and for what you can communicate, create, and experience with it. In other words, if you’ve got something to say, Galaxy S22+ makes it possible to say anything you want with video, at any time-even in the darkness of night.',
      details: "Light up your life with 8K video
      Capture the night with crystal-clear, bright pics and videos, no matter the lighting with Night Mode.
      Put all your favorite details on display. Portrait Mode auto- detects and adjusts to what you want front and center, making all your photos worthy of a frame.
      From elaborate landscapes to intricate creations, capture vivid detail with 50MP resolution.
      Your favorite content will look even more epic on our brightest display ever with Vision Booster.
      Power every scroll, click, tap and stream all day long and then some with an intelligent, long-lasting battery.²
      Expertly engineered to outlast your day with class. Finally, a phone that meets your standards.
      Your view just got an upgrade. 30x Space Zoom lets you get a VIP look from any seat."
    )
    file35 = File.open('app/assets/images/s22+.png')
    item35.photo.attach(io: file35, filename: 's22+.png')

    item36 = Item.create(
      name: 'BLU - V81 64GB (Unlocked) - Black',
      price: '149.99',
      department: 'phone',
      description: 'The V81 comes with a vivid high-definition large display that pumps out theater quality image that is sure to have you glued to the screen. Game, text or watch your fav on YouTube. Take excellent pictures with the A.I powered 13 Megapixel Dual Camera along with and 8 Megapixel front camera for selfie lovers! Packed with a massive 5000mAh battery, you will get two days of standard usage out of your V81.',
      details: "1.6GHz Octa Core, 3GB RAM - Delivers outstanding overall performance for opening and running applications, flipping through menus, running home screens and more.
      Compatible with AT&T, T-Mobile, Cricket, H2O Wireless, Net10, Simple Mobile, TracFone, Mint Mobile, T Mobile Sim card not included.
      6.5 inch HD+ touch screen - The extra large HD+ All Screen Display at 720 x 1600 resolution is matched with a slim body to comfortably fit in your hand.
      Android 10 - A custom operating system for Android phones that delivers easy app usability and responses."
    )
    file36 = File.open('app/assets/images/blu.png')
    item36.photo.attach(io: file36, filename: 'blu.png')

    item37 = Item.create(
    name: 'Klipsch - Reference 4" 35W 2-Way Powered Monitors (Pair) - Black',
    price: '499.99',
    department: 'audio',
    description: 'Enjoy powerful sound in your study or bedroom with these flat-response Klipsch bookshelf speakers. The four-inch high-output woofer is made of stiff material for low distortion, and the one-inch titanium horn-loaded tweeter carries the highs clearly. These Klipsch bookshelf speakers handle up to 50W RMS, 200W peak for accurate music reproduction.',
    details: "Designed for simple setup with your turntable, TV, computer, or wireless device
    70W total system power, 35W per channel
    Internal amplifier
    4 inch copper spun magnetically shielded IMG woofer
    Full-featured IR remote
    Two-way bass reflex enclosure
    Bluetooth wireless technology
    You will find a phono/line analog, 3.5mm analog mini jack, USB, and Toslink (Optical) inputs."
    )
    file37 = File.open('app/assets/images/klipsch.png')
    item37.photo.attach(io: file37, filename: 'klipsch.png')

    item38 = Item.create(
      name: 'Sony - Core Series 5" 3-Way Bookshelf Speakers (Pair) - Black',
      price: '199.99',
      department: 'audio',
      description: 'Immerse yourself in room-filling sound with these Sony Core Series SSCS5 bookshelf speakers, which feature 5" woofers and 3/4" and 1" tweeters for precise instrument and vocal reproduction and dynamic acoustic depth.',
      details: "100W maximum power handling
      5 inch dual-layer, foam, mica-reinforced woofer
      3/4 inch wide-dispersion super tweeter
      High-quality crossover networks
      3-way speaker system
      Wood, bass-reflex enclosure
      53Hz - 50kHz frequency response
      87dB sensitivity (2.83V, 1m)"
    )
    file38 = File.open('app/assets/images/sony-speaker.png')
    item38.photo.attach(io: file38, filename: 'sony-speaker.png')

    item39 = Item.create(
        name: 'Beats by Dr. Dre - Beats Studio³ Wireless Noise Cancelling Headphones - Matte Black',
        price: '349.99',
        department: 'audio',
        description: 'Beats Studio Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Cancelling (Pure ANC) to actively block external noise, and real-time audio calibration to preserve clarity, range, and emotion. It continuously pinpoints sounds to block while automatically responding to individual fit and music playback.',
        details: "Pure Adaptive Noise Cancelling (Pure ANC) actively blocks external noise
        Real-time audio calibration preserves a premium listening experience
        Up to 22 hours of battery life enables full-featured all-day wireless playback
        Apple W1 chip for Class 1 Wireless Bluetooth® connectivity and battery efficiency
        With fast fuel, a 10-minute charge gives three hours of play when the battery is low
        Pure ANC off for low-power mode provides up to 40 hours of battery life
        Take calls, control music, and activate Siri with multifunction on-ear controls
        Soft over-ear cushions for extended comfort and added noise isolation"
    )
    file39 = File.open('app/assets/images/beats.png')
    item39.photo.attach(io: file39, filename: 'beats.png')

    item40 = Item.create(
    name: 'Cyberpunk 2077 Standard Edition - PlayStation 4, PlayStation 5',
    price: '29.99',
    department: 'game',
    description: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamor, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.',
    details: "The game comes with the following physical items: a case with game discs, World Compendium detailing the game's setting and lore, postcards from Night City, a map of Night City, stickers
    Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements, and build your legend on the streets of Night City
    Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity, and depth
    Take a risky job, and go after a prototype implant that is the key to immortality"
    )
    file40 = File.open('app/assets/images/2077.png')
    item40.photo.attach(io: file40, filename: '2077.png')

    item41 = Item.create(
    name: 'Call of Duty: Modern Warfare II - PlayStation 5',
    price: '69.99',
    department: 'game',
    description: 'Call of Duty: Modern Warfare II',
    details: "Welcome to the new era of Call of Duty. Call of Duty: Modern Warfare II is the sequel to 2019’s blockbuster Modern Warfare.
    From small-scale, high-stakes infiltration tactics to highly classified missions, players will need to leverage new weapons, vehicles, and cutting-edge equipment to take on their enemies.
    Infinity Ward will immerse fans in heart-pounding next-gen, state-of-the-art gameplay.
    Fight alongside friends in a truly immersive experience with stunningly realistic sound, lighting, and graphics that produce the most advanced Call of Duty in history."
    )
    file41 = File.open('app/assets/images/cod.png')
    item41.photo.attach(io: file41, filename: 'cod.png')


    puts "Destroying reviews tables..."

    Review.destroy_all

    puts "Restting keys"

    ApplicationRecord.connection.reset_pk_sequence!('reviews')
    
    puts "Creating reviews..."

    Review.create!(
      reviewer_id: r.id,
      item_id: item1.id,
      parent_review_id: nil,
      title: "Good product!",
      body: "This is a very good product, would buy this again!",
      rating: 5
    )

    Review.create!(
      reviewer_id: r.id,
      item_id: item2.id,
      parent_review_id: nil,
      title: "Nice iPhone 14!",
      body: "I threw away my iPhone 13 right away once I got my new iPhone 14!",
      rating: 4
    )

    Review.create!(
      reviewer_id: d.id,
      item_id: item3.id,
      parent_review_id: nil,
      title: "Average!!",
      body: "Average camera",
      rating: 2.5
    )

    Review.create!(
      reviewer_id: c1.id,
      item_id: item4.id,
      parent_review_id: nil,
      title: "Nice",
      body: "Works welll",
      rating: 4
    )


    puts "Done!"
  end





  # item34 = Item.create(
  #   name: '',
  #   price: '',
  #   department: '',
  #   description: '',
  #   details: ""
  # )
  # file34 = File.open('app/assets/images/lenovo.png')
  # item34.photo.attach(io: file34, filename: 'lenovo.png')






