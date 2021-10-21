# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    Todo.destroy_all

    shower=Todo.create!(title: "Shower", body: "Take a shower", done: false)
    feed=Todo.create!(title: "Feed", body: "Feed on nutrients", done: false)
    wash=Todo.create!(title: "Wash", body: "Wash your hands", done: false)
    scrub=Todo.create!(title: "Srub", body: "Scrub the floor", done: false)
end