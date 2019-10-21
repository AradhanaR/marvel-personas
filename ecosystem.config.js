const path = require('path');

module.exports = {
  apps: [{
    name: 'marvel-personas',
    script: 'server.js',
    instances: 1,
    autorestart: true, // Restart on fail over
    max_memory_restart: '1G',
    error_file : "./err.log",
    out_file : "./out.log",
    env: {
      DEBUG: "*",
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    watch: true,
    node_args: ["--inspect"]
  }]
};
