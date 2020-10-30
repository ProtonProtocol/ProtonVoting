module.exports = {
    apps : [
      {
        name: 'proton-voting-demo',
        script: 'index.js',
        watch: false,
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        node_args: '--max_old_space_size=1024'
      },
    ]
  };