// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhonenumber
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with missing digits', () => {
  expect(isPhoneNumber('123-45-7890')).toBe(false);
});

test('invalid phone number with wrong format', () => {
  expect(isPhoneNumber('1234567-890')).toBe(false);
});


//isEmail
test('valid email basic', () => {
  expect(isEmail('yeon7lol@example.com')).toBe(true);
});

test('valid email with underscore', () => {
  expect(isEmail('tl_corejj@domain.co')).toBe(true);
});

test('invalid email missing @', () => {
  expect(isEmail('alwaysplanahea1.com')).toBe(false);
});

test('invalid email wrong domain', () => {
  expect(isEmail('impact@.com')).toBe(false);
});


//isStrongPassword
test('valid strong password', () => {
  expect(isStrongPassword('umti0602')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('sniper_100t')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1tl')).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword('c9')).toBe(false);
});


//isDate
test('valid date single digits', () => {
  expect(isDate('1/7/2001')).toBe(true);
});

test('valid date double digits', () => {
  expect(isDate('03/05/2002')).toBe(true);
});

test('invalid date wrong format', () => {
  expect(isDate('1994/06/22')).toBe(false);
});

test('invalid date missing year digits', () => {
  expect(isDate('08/24/99')).toBe(false);
});


//isHexColor
test('valid 3-digit hex', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('valid 6-digit hex without #', () => {
  expect(isHexColor('0a1723')).toBe(true);
});

test('invalid hex wrong characters', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('invalid hex wrong length', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});
