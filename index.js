const express = require('express');
const app = express();

app.get('/', (req, res) => {
	    res.send(`
	            <div style="background-color: #1a1a2e; color: #16ffbd; padding: 40px; font-family: 'Courier New', Courier, monospace; border-radius: 10px; border: 2px solid #16ffbd;">
		                <h1>íº€ DevOps Pipeline Active</h1>
				            <p><strong>Engineer:</strong> SATYAJEET PATIL</p>
					                <p><strong>Status:</strong> <span style="color: #ffde7d;">Deployment Successful</span></p>
							            <hr style="border: 0.5px solid #4e4e6a;">
								                <ul style="list-style-type: 'âœ” '; line-height: 2;">
										                <li>CI/CD Pipeline: <b>Jenkins & GitLab</b></li>
												                <li>Infrastructure: <b>Kubernetes Cluster</b></li>
														                <li>Configuration: <b>Ansible Playbooks</b></li>
																                <li>Containerization: <b>Docker Engine</b></li>
																		            </ul>
																			                <p style="font-size: 0.8em; color: #4e4e6a;">Timestamp: ${new Date().toLocaleString()}</p>
																					        </div>
																						    `);
});

app.listen(3000, () => {
	    console.log('App running on port 3000');
});
