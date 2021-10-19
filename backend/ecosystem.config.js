module.exports = {
  apps : [{
    name: 'homepages',
    script: 'index.js',
    instances: 2,
    exec_mode: 'cluster',
    env_development: {
      output: './logs/out.log',
      error: './logs/error.log',
      merge_logs: true,
      watch: true,
      env: {
        'DEBUG': '*'
      }
    },
    env_production: {

    }
  }]
};
