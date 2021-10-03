const passwordService = require('./passwordService')

afterEach(()=>{
   passwordService.deletePasswords();
});

it('createPassword', () => {
    expect(passwordService.createPassword( 'jö','www.jö.at','dashenka92','12345')).toEqual('OK');
});

it('readPassword', () => {
    passwordService.createPassword( 'jö','www.jö.at','dashenka92','12345');
    passwordService.createPassword( 'spar','www.spar.at','dashenka92','65498');

   const passwords = passwordService.readPasswords();
   expect(passwords).toEqual(
       [
          'For "jö" on web side "www.jö.at" you should use username "dashenka92" and Password "12345".',
          'For "spar" on web side "www.spar.at" you should use username "dashenka92" and Password "65498".'
       ]
   );
});

it('updatePassword', () => {
    passwordService.createPassword( 'jö','www.jö.at','dashenka92','12345');
    passwordService.createPassword( 'spar','www.spar.at','dashenka92','65498');

    let passwords = passwordService.readPasswords();

    expect(passwords).toEqual(
        [
            'For "jö" on web side "www.jö.at" you should use username "dashenka92" and Password "12345".',
            'For "spar" on web side "www.spar.at" you should use username "dashenka92" and Password "65498".'
        ]
    );

    passwordService.updatePassword('jö', 'www.joe.at', 'dashenka9222', '1234566');

    passwords = passwordService.readPasswords();

    expect(passwords).toEqual(
        [
            'For "jö" on web side "www.joe.at" you should use username "dashenka9222" and Password "1234566".',
            'For "spar" on web side "www.spar.at" you should use username "dashenka92" and Password "65498".'
        ]
    );

});

it('deletePassword', () => {
    passwordService.createPassword( 'jö','www.jö.at','dashenka92','12345');
    passwordService.createPassword( 'spar','www.spar.at','dashenka92','65498');

    let passwords = passwordService.readPasswords();

    expect(passwords).toEqual(
        [
            'For "jö" on web side "www.jö.at" you should use username "dashenka92" and Password "12345".',
            'For "spar" on web side "www.spar.at" you should use username "dashenka92" and Password "65498".'
        ]
    );

    passwordService.deletePassword('jö');

    passwords = passwordService.readPasswords();

    expect(passwords).toEqual(
        [
            'For "spar" on web side "www.spar.at" you should use username "dashenka92" and Password "65498".'
        ]
    );
});