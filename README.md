# Apartment App

### Authentication
- Authentication is a question of "Who are you? Are you really you?"
- User credentials are tools to help us identify whether a user is who they claim to be

### Authorization
- Once a user is authenticated, authorization process is performed
- Authorization is a question of "What do you have access to?"
- Certain users can be configured with limited permissions

### Installing Devise
```
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
```

#### Required configuration
Add the following configuration to config/environments/development.rb:
`config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }`

Verify that you can view Devise forms by visiting:
`http://localhost:3000/users/sign_in` and `http://localhost:3000/users/sign_up`

### Create the Apartment resource
```
$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
$ rails db:migrate
```

### Build the User and Apartment association
On app/models/apartment.rb
```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

On app/models/user.rb
```ruby
class User < ApplicationRecord
  has_many :apartments
end
```

### Devise with React

#### Installing React into Rails
```
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
```

#### Build entry point for React App component
Add an `index.html.erb` file under `/views/home/` directory.
Add the follow to the `index.html.erb` file:
```ruby
<%= react_component "App", {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

Add some content to App.js so that we can see it rendered:
```javascript
class App extends React.Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}
```

Add routes and constraints to config/routes.rb
```ruby
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root to: 'home#index'
```

Change configuration for using default method for ending using session in devise.rb
```ruby
config.sign_out_via = :get
```

### Added React Router
```
$ yarn add react-router-dom
```

### Added Reactstrap
```
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```
app/assets/stylesheets/application.scss
```
@import 'bootstrap';
```

### File Structure
- Assets folder
- Components folder
- Pages folder

### Header Component
- Passing in Devise routes to Header
- Conditionally render sign in and sign out
