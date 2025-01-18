import { exec } from 'child_process';



export default function handler(_, res) {
	const code = `
		git config user.name "sklbz"
		git config user.email "sokol.bozanic.sklbz@gmail.com"

		git pull

		echo "Bash script executed at $(date)" >>log.txt
		cat .txt >>log.txt

		git add .
		git commit -m "check"
		git push
	`;

	exec(code, { shell: '/bin/bash' }, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return res.status(500).json({ error: error.message });
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return res.status(500).json({ error: stderr });
		}
		console.log(`stdout: ${stdout}`);
		return res.status(200).json({ output: stdout })
	});
}

