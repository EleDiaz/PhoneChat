const uuid        = require('node-uuid');

const ApiResponse = require('../models/api-response.js');
const ApiMessages = require('../models/api-messages.js');
const UserProfile = require('../models/user-profile.js');
const User        = require('../models/user.js');
//const MailerMock  = require('../test/mailer-mock.js');
//const mailer      = new MailerMock();


// Let several operations over user accounts
// Login, logoff, signup ...
class AccountController {
  constructor(session) {
    this.session = session;
  }

  getSession() {
    return this.session;
  }

  setSession(session) {
    this.session = session;
  }

  // TODO: Something is strange here
  getUserFromUserRegistration(userRegistrationModel) {
    if (userRegistrationModel.password !== userRegistrationModel.passwordConfirm) {
      return new ApiResponse(
        { success: false,
          extras: { msg: ApiMessages.PASSWORD_CONFIRM_MISMATCH } }
        );
    }

    var user = new User({
      email: userRegistrationModel.email,
      firstName: userRegistrationModel.firstName,
      lastName: userRegistrationModel.lastName,
      password: userRegistrationModel.password
    });
    return new ApiResponse({ success: true, extras: { user: user } });
  }

  // Try register a user fail if the email is used currently
  register(newUser, callback) {
    User.findOne({ email: newUser.email }, (err, user) => {
      if (err) {
        return callback(err, new ApiResponse({ success: false, extras: { msg: ApiMessages.DB_ERROR } }));
      }
      if (user) {
        return callback(err, new ApiResponse({ success: false, extras: { msg: ApiMessages.EMAIL_ALREADY_EXISTS } }));
      } else {
        newUser.save((err, user, numberAffected) => {
          if (err) {
            return callback(err, new ApiResponse({ success: false, extras: { msg: ApiMessages.DB_ERROR } }));
          }
          if (numberAffected === 1) {
            let userProfileModel = new UserProfile({
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName
            });
            return callback(err, new ApiResponse({
              success: true, extras: {
                userProfileModel: userProfileModel
              }
            }));
          } else {
            return callback(err, new ApiResponse({ success: false, extras: { msg: ApiMessages.COULD_NOT_CREATE_USER } }));
          }
        });
      }
    })
  }

  logon(email, password, callback) {
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        return callback(err, new ApiResponse(
          { success: false
          , extras: { msg: ApiMessages.DB_ERROR }}
        ));
      }
      if (user) {
        if (password === user.password) {
          let userProfileModel = new UserProfile({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
          });

          this.session.userProfileModel = userProfileModel;
          this.session.id = uuid.v4();

          return callback(err, new ApiResponse({
            success: true, extras: {
              userProfileModel: userProfileModel,
              sessionId: this.session.id
            }
          }));
        } else {
          return callback(err, new ApiResponse(
            { success: false,
              extras: { msg: me.ApiMessages.INVALID_PWD } }
            ));
        }
      } else {
        return callback(err, new ApiResponse(
          { success: false,
            extras: { msg: me.ApiMessages.EMAIL_NOT_FOUND } }
          ));
      }
    });
  }

  logoff(){
    if (this.session.userProfileModel) delete this.session.userProfileModel;
    if (this.session.id) delete this.session.id;
    return;
  }

/*
  resetPassword(email, callback) {
    var me = this;
    me.userModel.findOne({ email: email }, function (err, user) {

      if (err) {
        return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
      }

      if (user) {
        // Save the user's email and a password reset hash in session.
        var passwordResetHash = me.uuid.v4();
        me.session.passwordResetHash = passwordResetHash;
        me.session.emailWhoRequestedPasswordReset = email;

        me.mailer.sendPasswordResetHash(email, passwordResetHash);

        return callback(err, new me.ApiResponse({ success: true, extras: { passwordResetHash: passwordResetHash } }));
      } else {
        return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.EMAIL_NOT_FOUND } }));
      }
    })
  }

  resetPasswordFinal(email, newPassword, newPasswordConfirm, passwordResetHash, callback) {
    var me = this;
    if (!me.session || !me.session.passwordResetHash) {
      return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_EXPIRED } }));
    }

    if (me.session.passwordResetHash !== passwordResetHash) {
      return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_HASH_MISMATCH } }));
    }

    if (me.session.emailWhoRequestedPasswordReset !== email) {
      return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_EMAIL_MISMATCH } }));
    }

    if (newPassword !== newPasswordConfirm) {
      return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_CONFIRM_MISMATCH } }));
    }

    me.userModel.update({ email: email }, { password: newPassword }, function (err, numberAffected, raw) {

      if (err) {
        return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
      }

      if (numberAffected < 1) {

        return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.COULD_NOT_RESET_PASSWORD } }));
      } else {
        return callback(err, new me.ApiResponse({ success: true, extras: null }));
      }
    });
  }
  */
}

module.exports = AccountController;
