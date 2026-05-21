import { spawnSync } from 'child_process';
import process from 'process';

// Vite default output directory is 'dist/assets'
const TARGET_DIR = 'dist/assets';

// By default we enable it unless explicitly disabled (or you can do the reverse)
const shouldObfuscate = process.env.ENABLE_OBFUSCATION !== 'false';

if (!shouldObfuscate) {
    console.log('[postbuild] Skip obfuscation. ENABLE_OBFUSCATION is false.');
    process.exit(0);
}

const commandArgs = [
    'javascript-obfuscator',
    TARGET_DIR,
    '--output',
    TARGET_DIR,
    '--compact',
    'true',
    '--string-array',
    'true',
    '--string-array-encoding',
    'rc4',
    '--target',
    'browser'
];

console.log(`[postbuild] Obfuscating JS files in ${TARGET_DIR}...`);

const result = spawnSync('npx', commandArgs, {
    stdio: 'inherit',
    shell: true
});

if (result.status !== 0) {
    console.error('[postbuild] Obfuscation failed. Build artifacts remain unobfuscated.');
    process.exit(result.status || 1);
} else {
    console.log('[postbuild] Obfuscation complete.');
}
