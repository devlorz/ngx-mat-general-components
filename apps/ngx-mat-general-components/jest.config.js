module.exports = {
  name: 'ngx-mat-general-components',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngx-mat-general-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
