function figo() {
  this.route('login');
  this.route('index', {path: '/'});
  this.route('customers', function () {
      this.route('new');
  });
  this.route('customer', {path: 'customers/:customer_id', resetNamespace: true}, function () {
    this.route('agents');
    this.route('users', function () {
        this.route('new');
    });
    this.route('settings');
    this.route('subscriptions');
    this.route('fastpath-settings');
    this.route('secure-settings');
  });

  this.route('fastpath-settings');
    this.route('secure-settings');
}