 users = [
    {
        email: 'deven@findapt.com',
        password: 'p@@pieShoe'
    },

    {
        email: 'redvine@delicious.com',
        password: 'l@zysunday'
    },

    {
        email: 'dog@doggo.com',
        password: 'Too$hort'

    }
 ]
 users.each do |attributes|
    User.create attributes
    puts "creating User #{attributes}"
  end