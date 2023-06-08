import type { Config } from 'jest';

export default {
    preset: 'ts-jest',
    moduleNameMapper: {
        '~/(.*)$': '<rootDir>/src/$1'
    },
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testPathIgnorePatterns: ['/client/', '/dist/'],
} as Config;