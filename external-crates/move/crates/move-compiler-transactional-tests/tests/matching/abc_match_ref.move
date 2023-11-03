//# init --edition 2024.alpha

//# publish
module 0x42::m {

    public enum ABC<T> has drop {
        A(T),
        B,
        C(T)
    }

    fun t0(abc: &ABC<u64>, default: &u64): &u64 {
        match (abc) {
            ABC::C(x) => x,
            ABC::A(x) => x,
            ABC::B => default,
        }
    }

}
