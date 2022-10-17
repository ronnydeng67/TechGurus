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
  
  puts "Creating itmes..."

  Item.create!(
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    price: '999.99',
    department: 'computers',
    description: 'Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.',
    details: [
      'Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance',
      'Go longer than ever with up to 18 hours of battery life',
      '8-core CPU delivers up to 3.5x faster performance to tackle projects faster than ever',
      'Seven GPU cores with up to 5x faster graphics for graphics-intensive apps and games',
      '16-core Neural Engine for advanced machine learning',
      '8GB of unified memory so everything you do is fast and fluid',
      'Superfast SSD storage launches apps and opens files in an instant'
    ]
  )

  Item.create!(
    name: 'Apple - iPhone 14 Pro Max 128GB - Space Black (Verizon)',
    price: '799',
    department: 'phone',
    description: 'iPhone 14 Pro Max. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.',
    details: [
      '6.7-inch Super Retina XDR display¹ featuring Always-On and ProMotion'
      'Dynamic Island, a magical new way to interact with iPhone'
      '48MP Main camera for up to 4x greater resolution'
      'Cinematic mode now in 4K Dolby Vision up to 30 fps'
      'Action mode for smooth, steady, handheld videos'
      'Vital safety features—Emergency SOS via satellite² and Crash Detection'
      'All-day battery life and up to 29 hours of video playback'
    ]
  )

  Item.create!(
    name: 'Canon - EOS Rebel T7 DSLR Video Camera with 18-55mm Lens - Black',
    price: '479.99',
    department: 'camera',
    description: 'Take professional-looking photos with this Canon DSLR camera bundle. The 24.1-megapixel CMOS sensor captures the smallest details, even in low light, and the optical image stabilizer technology ensures handheld shots are sharp. The 18-55mm lens included in this Canon DSLR camera bundle is suitable for taking wide-angle pictures or zooming in for portraits.',
    details: [
        'EF-S 18-55mm f/3.5-5.6 IS II lens provides versatility',
        'ISO 100 - 6400, ISO auto',
        'Capture fast-action shots at up to 3 fps (frames per second)',
        '9-point autofocus quickly tracks and locks onto your subject',
        'Capture spectacular movies in full 1080p HD',
        'Built-in Wi-Fi to instantly share your pictures',
        'PictBridge compatibility lets you print photos without a PC'
    ]
  )

  Item.create!(
    name: 'Apple - AirPods Pro (2nd generation) - White',
    price: '249.99',
    department: 'audio',
    description: '
    AirPods Pro feature up to 2x more Active Noise Cancellation,¹ plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.² Now with multiple ear tips (XS, S, M, L) and up to 6 hours of listening time.',
    details: [
        'Active Noise Cancellation reduces unwanted background noise',
        'Adaptive Transparency lets outside sounds in while reducing loud environmental noise',
        'Personalized Spatial Audio with dynamic head tracking places sound all around you²',
        'Multiple ear tips (XS, S, M, L)',
        'Touch control lets you swipe to adjust volume, press to direct media playback, answer or end calls, and press and hold to switch between listening modes',
        'Sweat and water resistant for AirPods Pro and charging case⁴',
        'MagSafe Charging Case with speaker and lanyard loop'
    ]
  )

  Item.create!(
    name: 'PlayStation 5 Console',
    price: '549.99',
    department: 'game',
    description: 'dsklvndmsnvdasdasjsdjdsadasdsaskavbnmsdavbkjcbavnsdasdasdsadasmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    details: 'sadsadsdsadsadsadsadsa'
  )


  puts "Done!"
end