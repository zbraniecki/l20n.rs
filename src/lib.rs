#![feature(proc_macro)]
#![feature(test)]

#[macro_use]
extern crate serde_derive;
extern crate test;


#[cfg(test)]
mod tests {
    use std::io;
    use std::io::Read;
    use std::fs::File;
    use test::Bencher;
    use ftl::entries::parser::Parser as EntriesParser;

    fn read_file(path: &str) -> Result<String, io::Error> {
        let mut f = try!(File::open(path));
        let mut s = String::new();
        try!(f.read_to_string(&mut s));
        Ok(s)
    }


    #[bench]
    fn bench_parser(b: &mut Bencher) {
        let f = read_file("./tests/workload-low.ftl").expect("Couldn't load file");

        b.iter(|| {
            let mut parser = EntriesParser::new(&f);
            parser.parse();
        });
    }
}


pub mod ftl;
