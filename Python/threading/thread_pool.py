import concurrent.futures
import time

start = time.perf_counter()

def do_somthing(seconds):
    print(f'Sleeping {seconds} sec(s)...')
    time.sleep(seconds)
    return f'Done Sleeping {seconds} sec(s)'
    
with concurrent.futures.ThreadPoolExecutor() as excutor:
    secs = [5,4,3,2,1]
    
    results = excutor.map(do_somthing, secs) # run do_something with every value of secs -> results list
    for result in results:
        try:
            print(result)
        except Exception as e:
            print(str(e))
    
    
finish = time.perf_counter()

print(f'finished in {round(finish-start, 2)} second(s)')