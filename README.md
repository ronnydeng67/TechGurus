# TechGurus

### Please Refresh multiple times!!!! For some reason it won't show any content when access it the first time.
[TechGurus](https://tech-gurus.herokuapp.com/)

### TechGurus, a BestBuy clone, is a electronic online retails store. Users are able to create their own accounts and add their items to cart to checkout.

## Technologies/Libraries

- Javascript
- React
- Redux
- Ruby
- Rails
- CSS
- JSX
- Webpack
- Heroku
- PostgreSQL
- Moment.js
- MUI
- AWS S3


## Functionlities

- User able to create account
- User able to sign in/sign out account
- User able to add items to cart
- User able to edit item quantity and remove items from cart

Modal is implemented for users to choose if they want to sign up accounts or sign in with their existing accounts. BestBuy is actually using this same modal to prompt users for their account management

![modal] (frontend/images/modal.png)

The sign up field require actual email and password with the right format. Password need to be minimum 6 characters, and the password in the confirm password field need to match the password you've entered. Option to show the passwords. Errors will pop underneath the input fields if inputs are incorrect, the borders of the fields would turn red as alert as well.

![errors] (frontend/images/error.png)

The code snippet below contains the logic to handle validating the errors of signing up an new account when the users press the create account button.

```
    const handleSubmit = e => {
        e.preventDefault();
        if ((password === confirmPassword) && (isValidName(name)) && (isValidEmail(email)) && (password.length > 5)) {
            setErrors([]);
            return dispatch(sessionActions.signup({name, email, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }

                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else return setErrors([res.statusText]);
            })
        } else {
            if ((password !== confirmPassword) || (confirmPassword.length === 0)) {
                setConPassError(true);
                confirmRef.current.focus();
                setMatchMsg("Passwords do not match.")
            }
            if (!isValidPassword(password)) {
                setPasswordError(true);
                passwordRef.current.focus();
            }
            if (!isValidEmail(email)) {
                setEmailError(true);
                emailRef.current.focus();
            }
            if (!isValidName(name)){
                setNameError(true)
                nameRef.current.focus();
            } 
        }
    }
```

## Future plans

- Finish up the cart checkout function
- Implement the search bar function
- Implement Google map API to show store location

