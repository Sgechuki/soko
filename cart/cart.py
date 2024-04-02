

class Cart():
    """
    A base Cart class, providing some default behaviours 
    that can be inherited or overidden, as necessary.
    """

    def __init__(self, request):
        self.session = request.session
        cart = self.session.get('skey')
        if 'skey' not in request.session:
            cart = self.session['skey'] = {'number': 1231231}
        self.cart = cart
