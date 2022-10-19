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
  User.create!(
    name: 'ronny', 
    email: 'ronny@gmail.com', 
    password: 'password'
  )

  User.create!(
    name: 'Demo',
    email: 'demo@user.com',
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
    department: 'computers',
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

  puts "Done!"
end