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
    name: 'Macbook Air 13.3 Laptop',
    price: '999.99',
    department: 'computers',
    desciption: 'dsklvndmsnvjsdjkavbnmsdavbkjcbavnmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    detail: 'sadsadsdsadsadsadsadsa'
  )

  Item.create!(
    name: 'Apple iPhone 14 128GB',
    price: '799',
    department: 'phone',
    desciption: 'dsklvndmsnvjsdjkavbnmsdavbkjcbavnsdasdasdsadasmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    detail: 'sadsadsdsadsadsadsadsa'
  )

  Item.create!(
    name: 'Canon - EOS Rebel T7',
    price: '479.99',
    department: 'camera',
    desciption: 'dsklvndmsndsdasdsavjsdjkavbnmsdavbkjcbavnsdasdasdsadasmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    detail: 'sadsadsdsadsadsadsadsa'
  )

  Item.create!(
    name: 'Apple - AirPods Pro',
    price: '249.99',
    department: 'audio',
    desciption: 'dsklvndmsnvjsdjdsadasdsaskavbnmsdavbkjcbavnsdasdasdsadasmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    detail: 'sadsadsdsadsadsadsadsa'
  )

  Item.create!(
    name: 'PlayStation 5 Console',
    price: '549.99',
    department: 'game',
    desciption: 'dsklvndmsnvdasdasjsdjdsadasdsaskavbnmsdavbkjcbavnsdasdasdsadasmsbadkvjlsbdmnvbcxnmvbxnmcvbjhsbdvdsvs',
    detail: 'sadsadsdsadsadsadsadsa'
  )


  puts "Done!"
end