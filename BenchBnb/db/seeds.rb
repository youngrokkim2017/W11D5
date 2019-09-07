# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

bench_1 = Bench.create(description: 'pier_15', lat: 37.801526, lng: -122.397611)
bench_2 = Bench.create(description: 'telegraph_hill', lat: 37.802376, lng: -122.405902)
bench_3 = Bench.create(description: 'fishermans_wharf', lat: 37.808600, lng: -122.409886)
bench_4 = Bench.create(description: 'lombard_street', lat: 37.802116, lng: -122.418738)
bench_5 = Bench.create(description: 'swensens_icecream', lat: 37.799048, lng: -122.419184)