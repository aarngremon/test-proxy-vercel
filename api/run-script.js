import { exec } from 'child_process';

export default function handler(_, res) {
	exec('bash script.sh', (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return res.status(500).json({ error: error.message });
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return res.status(500).json({ error: stderr });
		}
		console.log(`stdout: ${stdout}`);
		res.status(200).json({ message: 'Script executed successfully', output: stdout });
	});
}

