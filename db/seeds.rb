 users = [
    {
        email: 'deven@findapt.com',
        encrypted_password: 'p@@pieShoe'
    },

    {
        email: 'redvine@delicious.com',
        encrypted_password: 'l@zysunday'
    },

    {
        email: 'dog@doggo.com',
        encrypted_password: 'Too$hort'

    }
 ]
 users.each do |attributes|
    User.create attributes
    puts "creating User #{attributes}"
  end