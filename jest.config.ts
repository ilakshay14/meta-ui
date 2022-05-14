export default {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*stories.{js,jsx}',
        '!src/welcome.stories.js'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        'src/index.ts',
        'src/welcome.stories.js'
    ],
    coverageProvider: 'v8',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/config/jest/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/config/jest/fileMock.js'
    },
    testEnvironment: 'jsdom'
}