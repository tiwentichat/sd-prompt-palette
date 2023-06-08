import childProcess from 'child_process';
import { createDatabase } from './shared';

const main = async () => {
    try {
        await createDatabase();
        childProcess.execSync('ts-node src/main.ts', {
            stdio: 'inherit',
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

main();